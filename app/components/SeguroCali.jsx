"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { SEED_REPORTS, ALERTAS_BARRIO, CALI_CENTER } from "../lib/seedData";

// ─── Paleta y constantes ────────────────────────────────────────────────────
const COLORS = {
  brand:    "#0F6E56",
  brandDark:"#0a4f3e",
  brandMid: "#1D9E75",
  brandBg:  "#e1f5ee",
  alto:     "#E24B4A",
  altoBg:   "#fee2e2",
  altoText: "#A32D2D",
  medio:    "#EF9F27",
  medioBg:  "#fef3c7",
  medioText:"#854F0B",
  bajo:     "#639922",
  bajoBg:   "#d1fae5",
  bajoText: "#3B6D11",
  dark:     "#0F2D1A",
  mapBg:    "#1a2e1a",
};

const nivelColor = (n) => ({
  alto:  { bg: COLORS.altoBg,  text: COLORS.altoText,  dot: COLORS.alto  },
  medio: { bg: COLORS.medioBg, text: COLORS.medioText, dot: COLORS.medio },
  bajo:  { bg: COLORS.bajoBg,  text: COLORS.bajoText,  dot: COLORS.bajo  },
}[n] ?? { bg: "#f3f4f6", text: "#374151", dot: "#9ca3af" });

const CATEGORIAS = [
  { id: "rina",      label: "Riña / violencia",     icon: "⚠" },
  { id: "armas",     label: "Porte de armas",        icon: "!" },
  { id: "vehiculo",  label: "Vehículo sospechoso",   icon: "◈" },
  { id: "trafico",   label: "Microtráfico",           icon: "◉" },
  { id: "extorsion", label: "Extorsión negocio",      icon: "◆" },
  { id: "otro",      label: "Otro",                  icon: "+" },
];

// ─── Mini componentes ────────────────────────────────────────────────────────
function NivelTag({ nivel }) {
  const c = nivelColor(nivel);
  return (
    <span style={{
      display: "inline-block", fontSize: 11, padding: "2px 9px",
      borderRadius: 99, background: c.bg, color: c.text,
      fontWeight: 500, marginTop: 4,
    }}>
      {nivel === "alto" ? "Riesgo alto" : nivel === "medio" ? "Riesgo medio" : "Bajo riesgo"}
    </span>
  );
}

function LiveDot() {
  return (
    <span style={{
      display: "inline-block", width: 7, height: 7, borderRadius: "50%",
      background: "#4ade80",
      animation: "pulse 2s infinite",
    }} />
  );
}

// ─── Mapa SVG simplificado (sin Mapbox, corre localmente sin API key) ────────
function MapaCalor({ reportes }) {
  const canvasRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    if (!W || !H) return;
    canvas.width  = W * window.devicePixelRatio;
    canvas.height = H * window.devicePixelRatio;
    const ctx = canvas.getContext("2d");
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Fondo
    ctx.fillStyle = COLORS.mapBg;
    ctx.fillRect(0, 0, W, H);

    // Grid de calles
    ctx.strokeStyle = "rgba(100,200,120,0.1)";
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += W / 10) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += H / 8)  { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Río Cali (franja diagonal semitransparente)
    ctx.fillStyle = "rgba(50,100,200,0.18)";
    ctx.beginPath();
    ctx.moveTo(0, H * 0.28); ctx.lineTo(W * 0.6, H * 0.08);
    ctx.lineTo(W * 0.63, H * 0.15); ctx.lineTo(0, H * 0.36);
    ctx.closePath(); ctx.fill();

    // Proyección lat/lng → píxeles (bounding box de Cali)
    const LAT_MIN = 3.395, LAT_MAX = 3.485;
    const LNG_MIN = -76.575, LNG_MAX = -76.470;
    const toX = (lng) => ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * W;
    const toY = (lat) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H;

    // Heatmap
    reportes.forEach(({ lat, lng, nivel }) => {
      const x = toX(lng), y = toY(lat);
      const color = nivel === "alto" ? COLORS.alto : nivel === "medio" ? COLORS.medio : COLORS.bajo;
      const r = nivel === "alto" ? 28 : nivel === "medio" ? 22 : 16;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      const hex2rgb = (h) => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
      const [r2,g,b] = hex2rgb(color);
      grad.addColorStop(0,   `rgba(${r2},${g},${b},0.65)`);
      grad.addColorStop(0.5, `rgba(${r2},${g},${b},0.3)`);
      grad.addColorStop(1,   `rgba(${r2},${g},${b},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    });

    // Etiquetas de barrios clave
    const labels = [
      { name: "El Calvario",  lat: 3.438,  lng: -76.522 },
      { name: "Aguablanca",   lat: 3.413,  lng: -76.488 },
      { name: "Siloé",        lat: 3.450,  lng: -76.560 },
      { name: "Granada",      lat: 3.462,  lng: -76.528 },
      { name: "Ciudad Jardín",lat: 3.432,  lng: -76.537 },
    ];
    ctx.font = "bold 10px system-ui";
    ctx.textAlign = "center";
    labels.forEach(({ name, lat, lng }) => {
      const x = toX(lng), y = toY(lat);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fillText(name, x, y);
    });
  }, [reportes]);

  useEffect(() => {
    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [draw]);

  return (
    <div style={{ position: "relative", background: COLORS.mapBg, borderRadius: 10, overflow: "hidden", height: 200 }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
      <div style={{
        position: "absolute", top: 8, left: 8,
        background: "rgba(0,0,0,0.5)", borderRadius: 5,
        padding: "3px 8px", fontSize: 10, color: "#a3e6b0",
      }}>
        Cali — tiempo real
      </div>
      <div style={{
        position: "absolute", bottom: 8, right: 8,
        background: "rgba(0,0,0,0.55)", borderRadius: 5,
        padding: "5px 8px", display: "flex", flexDirection: "column", gap: 3,
      }}>
        {[["alto","Alto riesgo"],["medio","Medio"],["bajo","Bajo"]].map(([n, label]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#ccc" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: nivelColor(n).dot }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Pantalla 1: Mapa ────────────────────────────────────────────────────────
function PantallaMapa({ reportes }) {
  const recientes = [...reportes].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 4);

  return (
    <div>
      <MapaCalor reportes={reportes} />
      <p style={{ fontSize: 12, color: "#6b7280", margin: "12px 0 8px" }}>Últimos reportes en tu zona</p>
      <div>
        {recientes.map((r) => {
          const c = nivelColor(r.nivel);
          const tiempo = Math.round((Date.now() - new Date(r.timestamp)) / 60000);
          return (
            <div key={r.id} style={{
              display: "flex", gap: 10, padding: "9px 0",
              borderBottom: "0.5px solid #e5e7eb",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: 30, height: 30, borderRadius: "50%",
                background: c.bg, color: c.text,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, flexShrink: 0, fontWeight: 600,
              }}>
                {r.nivel === "alto" ? "!" : r.nivel === "medio" ? "~" : "✓"}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>
                  {r.categoria} — {r.barrio}
                </div>
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>
                  {r.descripcion}
                </div>
                <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2 }}>
                  hace {tiempo} min
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Pantalla 2: Reportar ────────────────────────────────────────────────────
function PantallaReportar({ onReporteEnviado }) {
  const [catSeleccionada, setCat] = useState("rina");
  const [barrio, setBarrio]       = useState("");
  const [descripcion, setDesc]    = useState("");
  const [enviado, setEnviado]     = useState(false);

  const handleSubmit = () => {
    if (!catSeleccionada) return;
    const nuevo = {
      id:          Date.now(),
      lat:         CALI_CENTER.lat + (Math.random() - 0.5) * 0.05,
      lng:         CALI_CENTER.lng + (Math.random() - 0.5) * 0.05,
      categoria:   CATEGORIAS.find(c => c.id === catSeleccionada)?.label ?? "Otro",
      barrio:      barrio || "Sin especificar",
      descripcion: descripcion || "Sin descripción",
      nivel:       ["rina","armas"].includes(catSeleccionada) ? "alto" : catSeleccionada === "otro" ? "bajo" : "medio",
      timestamp:   new Date().toISOString(),
    };
    onReporteEnviado(nuevo);
    setEnviado(true);
    setTimeout(() => { setEnviado(false); setCat("rina"); setBarrio(""); setDesc(""); }, 2500);
  };

  if (enviado) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: COLORS.brandBg, color: COLORS.brand,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, margin: "0 auto 16px",
        }}>✓</div>
        <p style={{ fontSize: 16, fontWeight: 500, color: "#111827", marginBottom: 6 }}>
          Reporte enviado
        </p>
        <p style={{ fontSize: 13, color: "#6b7280" }}>
          Gracias por ayudar a mantener Cali más segura.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Badge anónimo */}
      <div style={{
        display: "flex", alignItems: "center", gap: 7,
        background: COLORS.brandBg, borderRadius: 8,
        padding: "8px 11px", fontSize: 12, color: COLORS.brand,
        marginBottom: 16, fontWeight: 500,
      }}>
        <span>🔒</span>
        <span>Reporte 100% anónimo — sin datos personales</span>
      </div>

      {/* Categoría */}
      <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 8, fontWeight: 500 }}>
        ¿Qué está pasando?
      </label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
        {CATEGORIAS.map((c) => (
          <button
            key={c.id}
            onClick={() => setCat(c.id)}
            style={{
              padding: "10px 8px", border: catSeleccionada === c.id
                ? `1.5px solid ${COLORS.brand}` : "0.5px solid #d1d5db",
              borderRadius: 8,
              background: catSeleccionada === c.id ? COLORS.brandBg : "#f9fafb",
              color:       catSeleccionada === c.id ? COLORS.brand   : "#374151",
              fontSize: 12, cursor: "pointer", fontWeight: catSeleccionada === c.id ? 500 : 400,
              transition: "all .15s", textAlign: "center",
            }}
          >
            <span style={{ marginRight: 5 }}>{c.icon}</span>{c.label}
          </button>
        ))}
      </div>

      {/* Barrio */}
      <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 6, fontWeight: 500 }}>
        Barrio o sector (opcional)
      </label>
      <input
        type="text"
        value={barrio}
        onChange={(e) => setBarrio(e.target.value)}
        placeholder="Ej: El Calvario, Aguablanca..."
        style={{
          width: "100%", padding: "9px 12px", borderRadius: 8,
          border: "0.5px solid #d1d5db", background: "#f9fafb",
          fontSize: 13, color: "#111827", marginBottom: 14, boxSizing: "border-box",
          outline: "none",
        }}
      />

      {/* Descripción */}
      <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 6, fontWeight: 500 }}>
        Descripción breve (opcional)
      </label>
      <textarea
        rows={3}
        value={descripcion}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="¿Qué viste? No es necesario identificarte."
        style={{
          width: "100%", padding: "9px 12px", borderRadius: 8,
          border: "0.5px solid #d1d5db", background: "#f9fafb",
          fontSize: 13, color: "#111827", resize: "none",
          marginBottom: 16, boxSizing: "border-box", outline: "none",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%", padding: 13, background: COLORS.brandMid,
          color: "#fff", border: "none", borderRadius: 8,
          fontSize: 14, fontWeight: 600, cursor: "pointer",
          transition: "opacity .2s",
        }}
        onMouseOver={(e) => (e.target.style.opacity = 0.88)}
        onMouseOut={(e)  => (e.target.style.opacity = 1)}
      >
        Enviar reporte
      </button>
    </div>
  );
}

// ─── Pantalla 3: Alertas ─────────────────────────────────────────────────────
function PantallaAlertas() {
  const [filtro, setFiltro] = useState("todos");
  const filtradas = ALERTAS_BARRIO.filter(a => filtro === "todos" || a.nivel === filtro);

  return (
    <div>
      {/* Filtros */}
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {["todos","alto","medio","bajo"].map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            style={{
              padding: "5px 12px", borderRadius: 99, fontSize: 12, cursor: "pointer",
              border: filtro === f ? "none" : "0.5px solid #d1d5db",
              background: filtro === f
                ? (f === "todos" ? COLORS.brand : nivelColor(f).dot)
                : "#f9fafb",
              color: filtro === f ? "#fff" : "#6b7280",
              fontWeight: filtro === f ? 500 : 400,
              transition: "all .15s",
            }}
          >
            {f === "todos" ? "Todos" : f === "alto" ? "Alto" : f === "medio" ? "Medio" : "Bajo"}
          </button>
        ))}
      </div>

      <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 12 }}>
        Actualizado hace 2 min · {filtradas.length} zonas
      </p>

      {filtradas.map((a) => {
        const c = nivelColor(a.nivel);
        return (
          <div
            key={a.barrio}
            style={{
              padding: "10px 12px", marginBottom: 8, borderRadius: 8,
              background: "#f9fafb",
              borderLeft: `3px solid ${c.dot}`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>{a.barrio}</div>
              <span style={{ fontSize: 11, color: "#9ca3af" }}>{a.reportes} rep.</span>
            </div>
            <div style={{ fontSize: 12, color: "#6b7280", marginTop: 3, lineHeight: 1.5 }}>{a.descripcion}</div>
            <NivelTag nivel={a.nivel} />
          </div>
        );
      })}
    </div>
  );
}

// ─── Pantalla 4: SOS ─────────────────────────────────────────────────────────
function PantallaSOS() {
  const [activado, setActivado] = useState(false);

  const handleSOS = () => {
    setActivado(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => console.log("GPS:", pos.coords.latitude, pos.coords.longitude),
        () => {}
      );
    }
    setTimeout(() => setActivado(false), 4000);
  };

  const emergencias = [
    { num: "123", label: "Policía Nacional",     tel: "tel:123" },
    { num: "112", label: "Emergencias generales", tel: "tel:112" },
    { num: "165", label: "Denuncia anónima",      tel: "tel:165" },
    { num: "119", label: "Línea de víctimas",     tel: "tel:119" },
  ];

  return (
    <div>
      <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginBottom: 20 }}>
        Si estás en peligro, activa el botón SOS. Tu ubicación GPS se enviará
        de forma anónima al sistema de emergencias.
      </p>

      {/* Botón SOS central */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <button
          onClick={handleSOS}
          style={{
            width: 100, height: 100, borderRadius: "50%",
            background: activado ? "#15803d" : COLORS.alto,
            border: "none", color: "#fff",
            fontSize: 18, fontWeight: 700, cursor: "pointer",
            transition: "all .3s",
            boxShadow: activado ? "none" : `0 0 0 8px ${COLORS.altoBg}`,
            letterSpacing: 1,
          }}
        >
          {activado ? "✓" : "SOS"}
        </button>
        <p style={{ fontSize: 12, color: "#6b7280", marginTop: 10 }}>
          {activado ? "Ubicación enviada — ayuda en camino" : "Toca para activar emergencia"}
        </p>
      </div>

      {/* Líneas de emergencia */}
      <p style={{ fontSize: 12, fontWeight: 500, color: "#374151", marginBottom: 10 }}>
        Líneas de emergencia Cali
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {emergencias.map(({ num, label, tel }) => (
          <a
            key={num}
            href={tel}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "11px 14px", background: "#f9fafb",
              borderRadius: 8, textDecoration: "none",
              border: "0.5px solid #e5e7eb",
            }}
          >
            <div style={{
              fontSize: 18, fontWeight: 700, color: COLORS.brand,
              minWidth: 40,
            }}>{num}</div>
            <div style={{ fontSize: 13, color: "#374151" }}>{label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Pantalla 5: Dashboard institucional ────────────────────────────────────
function PantallaDashboard({ reportes }) {
  const [filtroDash, setFiltroDash] = useState("todos");

  const stats = {
    total: reportes.length,
    alto:  reportes.filter(r => r.nivel === "alto").length,
    medio: reportes.filter(r => r.nivel === "medio").length,
    bajo:  reportes.filter(r => r.nivel === "bajo").length,
  };

  const filtrados = filtroDash === "todos"
    ? reportes
    : reportes.filter(r => r.nivel === filtroDash);

  const recientes = [...filtrados]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 10);

  return (
    <div>
      {/* Header institucional */}
      <div style={{
        background: COLORS.dark, borderRadius: 10,
        padding: "10px 14px", marginBottom: 16,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>
          Panel institucional
        </span>
        <span style={{ fontSize: 10, color: "#4ade80" }}>
          Policía Metropolitana
        </span>
      </div>

      {/* Métricas */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
        {[
          { label: "Reportes hoy", val: stats.total,  color: "#111827" },
          { label: "Zonas activas",val: 12,            color: "#111827" },
          { label: "Nivel alto",   val: stats.alto,   color: COLORS.alto  },
          { label: "Nivel bajo",   val: stats.bajo,   color: COLORS.bajo  },
        ].map(({ label, val, color }) => (
          <div key={label} style={{
            background: "#f9fafb", borderRadius: 8, padding: "10px 12px",
            border: "0.5px solid #e5e7eb",
          }}>
            <div style={{ fontSize: 22, fontWeight: 600, color }}>{val}</div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Mini mapa */}
      <div style={{ marginBottom: 16 }}>
        <MapaCalor reportes={reportes} />
      </div>

      {/* Filtros tabla */}
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        {["todos","alto","medio","bajo"].map((f) => (
          <button
            key={f}
            onClick={() => setFiltroDash(f)}
            style={{
              padding: "4px 10px", borderRadius: 99, fontSize: 11, cursor: "pointer",
              border: filtroDash === f ? "none" : "0.5px solid #d1d5db",
              background: filtroDash === f
                ? (f === "todos" ? COLORS.brand : nivelColor(f).dot)
                : "#f9fafb",
              color: filtroDash === f ? "#fff" : "#6b7280",
              transition: "all .15s",
            }}
          >
            {f === "todos" ? "Todos" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Tabla */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr>
              {["Barrio","Tipo","Hora","Nivel"].map(col => (
                <th key={col} style={{
                  textAlign: "left", padding: "6px 8px",
                  borderBottom: "0.5px solid #e5e7eb",
                  color: "#6b7280", fontWeight: 500, fontSize: 11,
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recientes.map((r) => {
              const c = nivelColor(r.nivel);
              const hora = new Date(r.timestamp).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
              return (
                <tr key={r.id}>
                  <td style={{ padding: "7px 8px", borderBottom: "0.5px solid #f3f4f6", color: "#111827" }}>{r.barrio}</td>
                  <td style={{ padding: "7px 8px", borderBottom: "0.5px solid #f3f4f6", color: "#374151" }}>{r.categoria}</td>
                  <td style={{ padding: "7px 8px", borderBottom: "0.5px solid #f3f4f6", color: "#6b7280" }}>{hora}</td>
                  <td style={{ padding: "7px 8px", borderBottom: "0.5px solid #f3f4f6" }}>
                    <span style={{
                      fontSize: 10, padding: "2px 7px", borderRadius: 99,
                      background: c.bg, color: c.text, fontWeight: 500,
                    }}>
                      {r.nivel}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Barra de navegación ─────────────────────────────────────────────────────
function NavBar({ pantalla, setPantalla }) {
  const items = [
    { id: "mapa",      label: "Mapa",     icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.5"/>
      </svg>
    )},
    { id: "reportar",  label: "Reportar", icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 4v12M4 10h12" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )},
    { id: "alertas",   label: "Alertas",  icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3a5 5 0 015 5v4l1.5 2.5h-13L5 12V8a5 5 0 015-5z" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.5"/>
        <path d="M8 16a2 2 0 004 0" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.5"/>
      </svg>
    )},
    { id: "sos",       label: "SOS",      icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke={COLORS.alto} strokeWidth="1.5"/>
        <path d="M10 6.5v4" stroke={COLORS.alto} strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="10" cy="13.5" r="1" fill={COLORS.alto}/>
      </svg>
    )},
    { id: "dashboard", label: "Panel",    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.5"/>
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.5"/>
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.5"/>
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke={active ? COLORS.brand : "#9ca3af"} strokeWidth="1.5"/>
      </svg>
    )},
  ];

  return (
    <div style={{
      display: "flex", borderTop: "0.5px solid #e5e7eb",
      background: "#fff",
    }}>
      {items.map(({ id, label, icon }) => {
        const active = pantalla === id;
        return (
          <button
            key={id}
            onClick={() => setPantalla(id)}
            style={{
              flex: 1, padding: "8px 4px 6px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
              border: "none", background: "none", cursor: "pointer",
              color: active ? COLORS.brand : "#9ca3af",
              fontSize: 10, fontWeight: active ? 500 : 400,
              transition: "color .15s",
            }}
          >
            {icon(active)}
            {label}
          </button>
        );
      })}
    </div>
  );
}

// ─── App principal ───────────────────────────────────────────────────────────
export default function SeguroCali() {
  const [pantalla, setPantalla]   = useState("mapa");
  const [reportes,  setReportes]  = useState(SEED_REPORTS);

  const agregarReporte = useCallback((nuevo) => {
    setReportes(prev => [nuevo, ...prev]);
  }, []);

  const titulos = {
    mapa:      "SeguroCali",
    reportar:  "Nuevo reporte",
    alertas:   "Alertas activas",
    sos:       "Emergencia SOS",
    dashboard: "Panel institucional",
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: #f3f4f6; font-family: system-ui, -apple-system, sans-serif; }
      `}</style>

      <div style={{
        maxWidth: 430, margin: "0 auto",
        background: "#fff",
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}>

        {/* Status bar */}
        <div style={{
          background: COLORS.dark, padding: "6px 16px",
          display: "flex", justifyContent: "space-between",
          fontSize: 10, color: "#a3e6b0",
        }}>
          <span>9:41</span>
          <span>Cali, Valle del Cauca</span>
        </div>

        {/* Top bar */}
        <div style={{
          background: COLORS.dark, padding: "10px 16px 12px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 7,
              background: COLORS.brandMid,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, color: "#fff", fontWeight: 700,
            }}>S</div>
            <span style={{ color: "#fff", fontSize: 15, fontWeight: 600, letterSpacing: 0.3 }}>
              {titulos[pantalla]}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#a3e6b0" }}>
            <LiveDot />
            En vivo · {reportes.length} reportes
          </div>
        </div>

        {/* Contenido scrollable */}
        <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
          {pantalla === "mapa"      && <PantallaMapa reportes={reportes} />}
          {pantalla === "reportar"  && <PantallaReportar onReporteEnviado={agregarReporte} />}
          {pantalla === "alertas"   && <PantallaAlertas />}
          {pantalla === "sos"       && <PantallaSOS />}
          {pantalla === "dashboard" && <PantallaDashboard reportes={reportes} />}
        </div>

        {/* Nav bar */}
        <NavBar pantalla={pantalla} setPantalla={setPantalla} />
      </div>
    </>
  );
}
