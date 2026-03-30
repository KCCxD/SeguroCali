module.exports = [
"[project]/app/components/SeguroCali.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeguroCali
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/seedData'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
// ─── Paleta y constantes ────────────────────────────────────────────────────
const COLORS = {
    brand: "#0F6E56",
    brandDark: "#0a4f3e",
    brandMid: "#1D9E75",
    brandBg: "#e1f5ee",
    alto: "#E24B4A",
    altoBg: "#fee2e2",
    altoText: "#A32D2D",
    medio: "#EF9F27",
    medioBg: "#fef3c7",
    medioText: "#854F0B",
    bajo: "#639922",
    bajoBg: "#d1fae5",
    bajoText: "#3B6D11",
    dark: "#0F2D1A",
    mapBg: "#1a2e1a"
};
const nivelColor = (n)=>({
        alto: {
            bg: COLORS.altoBg,
            text: COLORS.altoText,
            dot: COLORS.alto
        },
        medio: {
            bg: COLORS.medioBg,
            text: COLORS.medioText,
            dot: COLORS.medio
        },
        bajo: {
            bg: COLORS.bajoBg,
            text: COLORS.bajoText,
            dot: COLORS.bajo
        }
    })[n] ?? {
        bg: "#f3f4f6",
        text: "#374151",
        dot: "#9ca3af"
    };
const CATEGORIAS = [
    {
        id: "rina",
        label: "Riña / violencia",
        icon: "⚠"
    },
    {
        id: "armas",
        label: "Porte de armas",
        icon: "!"
    },
    {
        id: "vehiculo",
        label: "Vehículo sospechoso",
        icon: "◈"
    },
    {
        id: "trafico",
        label: "Microtráfico",
        icon: "◉"
    },
    {
        id: "extorsion",
        label: "Extorsión negocio",
        icon: "◆"
    },
    {
        id: "otro",
        label: "Otro",
        icon: "+"
    }
];
// ─── Mini componentes ────────────────────────────────────────────────────────
function NivelTag({ nivel }) {
    const c = nivelColor(nivel);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-block",
            fontSize: 11,
            padding: "2px 9px",
            borderRadius: 99,
            background: c.bg,
            color: c.text,
            fontWeight: 500,
            marginTop: 4
        },
        children: nivel === "alto" ? "Riesgo alto" : nivel === "medio" ? "Riesgo medio" : "Bajo riesgo"
    }, void 0, false, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function LiveDot() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-block",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#4ade80",
            animation: "pulse 2s infinite"
        }
    }, void 0, false, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
// ─── Mapa SVG simplificado (sin Mapbox, corre localmente sin API key) ────────
function MapaCalor({ reportes }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const W = canvas.offsetWidth;
        const H = canvas.offsetHeight;
        if (!W || !H) return;
        canvas.width = W * window.devicePixelRatio;
        canvas.height = H * window.devicePixelRatio;
        const ctx = canvas.getContext("2d");
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        // Fondo
        ctx.fillStyle = COLORS.mapBg;
        ctx.fillRect(0, 0, W, H);
        // Grid de calles
        ctx.strokeStyle = "rgba(100,200,120,0.1)";
        ctx.lineWidth = 0.5;
        for(let x = 0; x < W; x += W / 10){
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
            ctx.stroke();
        }
        for(let y = 0; y < H; y += H / 8){
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
            ctx.stroke();
        }
        // Río Cali (franja diagonal semitransparente)
        ctx.fillStyle = "rgba(50,100,200,0.18)";
        ctx.beginPath();
        ctx.moveTo(0, H * 0.28);
        ctx.lineTo(W * 0.6, H * 0.08);
        ctx.lineTo(W * 0.63, H * 0.15);
        ctx.lineTo(0, H * 0.36);
        ctx.closePath();
        ctx.fill();
        // Proyección lat/lng → píxeles (bounding box de Cali)
        const LAT_MIN = 3.395, LAT_MAX = 3.485;
        const LNG_MIN = -76.575, LNG_MAX = -76.470;
        const toX = (lng)=>(lng - LNG_MIN) / (LNG_MAX - LNG_MIN) * W;
        const toY = (lat)=>(LAT_MAX - lat) / (LAT_MAX - LAT_MIN) * H;
        // Heatmap
        reportes.forEach(({ lat, lng, nivel })=>{
            const x = toX(lng), y = toY(lat);
            const color = nivel === "alto" ? COLORS.alto : nivel === "medio" ? COLORS.medio : COLORS.bajo;
            const r = nivel === "alto" ? 28 : nivel === "medio" ? 22 : 16;
            const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
            const hex2rgb = (h)=>[
                    parseInt(h.slice(1, 3), 16),
                    parseInt(h.slice(3, 5), 16),
                    parseInt(h.slice(5, 7), 16)
                ];
            const [r2, g, b] = hex2rgb(color);
            grad.addColorStop(0, `rgba(${r2},${g},${b},0.65)`);
            grad.addColorStop(0.5, `rgba(${r2},${g},${b},0.3)`);
            grad.addColorStop(1, `rgba(${r2},${g},${b},0)`);
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        });
        // Etiquetas de barrios clave
        const labels = [
            {
                name: "El Calvario",
                lat: 3.438,
                lng: -76.522
            },
            {
                name: "Aguablanca",
                lat: 3.413,
                lng: -76.488
            },
            {
                name: "Siloé",
                lat: 3.450,
                lng: -76.560
            },
            {
                name: "Granada",
                lat: 3.462,
                lng: -76.528
            },
            {
                name: "Ciudad Jardín",
                lat: 3.432,
                lng: -76.537
            }
        ];
        ctx.font = "bold 10px system-ui";
        ctx.textAlign = "center";
        labels.forEach(({ name, lat, lng })=>{
            const x = toX(lng), y = toY(lat);
            ctx.fillStyle = "rgba(255,255,255,0.55)";
            ctx.fillText(name, x, y);
        });
    }, [
        reportes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        draw();
        window.addEventListener("resize", draw);
        return ()=>window.removeEventListener("resize", draw);
    }, [
        draw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            background: COLORS.mapBg,
            borderRadius: 10,
            overflow: "hidden",
            height: 200
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    display: "block",
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 8,
                    left: 8,
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: 5,
                    padding: "3px 8px",
                    fontSize: 10,
                    color: "#a3e6b0"
                },
                children: "Cali — tiempo real"
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.55)",
                    borderRadius: 5,
                    padding: "5px 8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3
                },
                children: [
                    [
                        "alto",
                        "Alto riesgo"
                    ],
                    [
                        "medio",
                        "Medio"
                    ],
                    [
                        "bajo",
                        "Bajo"
                    ]
                ].map(([n, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: 10,
                            color: "#ccc"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: nivelColor(n).dot
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            label
                        ]
                    }, n, true, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
// ─── Pantalla 1: Mapa ────────────────────────────────────────────────────────
function PantallaMapa({ reportes }) {
    const recientes = [
        ...reportes
    ].sort((a, b)=>new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapaCalor, {
                reportes: reportes
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 12,
                    color: "#6b7280",
                    margin: "12px 0 8px"
                },
                children: "Últimos reportes en tu zona"
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: recientes.map((r)=>{
                    const c = nivelColor(r.nivel);
                    const tiempo = Math.round((Date.now() - new Date(r.timestamp)) / 60000);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 10,
                            padding: "9px 0",
                            borderBottom: "0.5px solid #e5e7eb",
                            alignItems: "flex-start"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 30,
                                    height: 30,
                                    borderRadius: "50%",
                                    background: c.bg,
                                    color: c.text,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 13,
                                    flexShrink: 0,
                                    fontWeight: 600
                                },
                                children: r.nivel === "alto" ? "!" : r.nivel === "medio" ? "~" : "✓"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: "#111827"
                                        },
                                        children: [
                                            r.categoria,
                                            " — ",
                                            r.barrio
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SeguroCali.jsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: "#6b7280",
                                            marginTop: 2
                                        },
                                        children: r.descripcion
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SeguroCali.jsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: "#9ca3af",
                                            marginTop: 2
                                        },
                                        children: [
                                            "hace ",
                                            tiempo,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SeguroCali.jsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 178,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
// ─── Pantalla 2: Reportar ────────────────────────────────────────────────────
function PantallaReportar({ onReporteEnviado }) {
    const [catSeleccionada, setCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("rina");
    const [barrio, setBarrio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [descripcion, setDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [enviado, setEnviado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = ()=>{
        if (!catSeleccionada) return;
        const nuevo = {
            id: Date.now(),
            lat: CALI_CENTER.lat + (Math.random() - 0.5) * 0.05,
            lng: CALI_CENTER.lng + (Math.random() - 0.5) * 0.05,
            categoria: CATEGORIAS.find((c)=>c.id === catSeleccionada)?.label ?? "Otro",
            barrio: barrio || "Sin especificar",
            descripcion: descripcion || "Sin descripción",
            nivel: [
                "rina",
                "armas"
            ].includes(catSeleccionada) ? "alto" : catSeleccionada === "otro" ? "bajo" : "medio",
            timestamp: new Date().toISOString()
        };
        onReporteEnviado(nuevo);
        setEnviado(true);
        setTimeout(()=>{
            setEnviado(false);
            setCat("rina");
            setBarrio("");
            setDesc("");
        }, 2500);
    };
    if (enviado) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                padding: "40px 20px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: COLORS.brandBg,
                        color: COLORS.brand,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        margin: "0 auto 16px"
                    },
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#111827",
                        marginBottom: 6
                    },
                    children: "Reporte enviado"
                }, void 0, false, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 13,
                        color: "#6b7280"
                    },
                    children: "Gracias por ayudar a mantener Cali más segura."
                }, void 0, false, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/SeguroCali.jsx",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    background: COLORS.brandBg,
                    borderRadius: 8,
                    padding: "8px 11px",
                    fontSize: 12,
                    color: COLORS.brand,
                    marginBottom: 16,
                    fontWeight: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🔒"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Reporte 100% anónimo — sin datos personales"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontSize: 12,
                    color: "#6b7280",
                    display: "block",
                    marginBottom: 8,
                    fontWeight: 500
                },
                children: "¿Qué está pasando?"
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 16
                },
                children: CATEGORIAS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCat(c.id),
                        style: {
                            padding: "10px 8px",
                            border: catSeleccionada === c.id ? `1.5px solid ${COLORS.brand}` : "0.5px solid #d1d5db",
                            borderRadius: 8,
                            background: catSeleccionada === c.id ? COLORS.brandBg : "#f9fafb",
                            color: catSeleccionada === c.id ? COLORS.brand : "#374151",
                            fontSize: 12,
                            cursor: "pointer",
                            fontWeight: catSeleccionada === c.id ? 500 : 400,
                            transition: "all .15s",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginRight: 5
                                },
                                children: c.icon
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            c.label
                        ]
                    }, c.id, true, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontSize: 12,
                    color: "#6b7280",
                    display: "block",
                    marginBottom: 6,
                    fontWeight: 500
                },
                children: "Barrio o sector (opcional)"
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: barrio,
                onChange: (e)=>setBarrio(e.target.value),
                placeholder: "Ej: El Calvario, Aguablanca...",
                style: {
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: 8,
                    border: "0.5px solid #d1d5db",
                    background: "#f9fafb",
                    fontSize: 13,
                    color: "#111827",
                    marginBottom: 14,
                    boxSizing: "border-box",
                    outline: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontSize: 12,
                    color: "#6b7280",
                    display: "block",
                    marginBottom: 6,
                    fontWeight: 500
                },
                children: "Descripción breve (opcional)"
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                rows: 3,
                value: descripcion,
                onChange: (e)=>setDesc(e.target.value),
                placeholder: "¿Qué viste? No es necesario identificarte.",
                style: {
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: 8,
                    border: "0.5px solid #d1d5db",
                    background: "#f9fafb",
                    fontSize: 13,
                    color: "#111827",
                    resize: "none",
                    marginBottom: 16,
                    boxSizing: "border-box",
                    outline: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                style: {
                    width: "100%",
                    padding: 13,
                    background: COLORS.brandMid,
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity .2s"
                },
                onMouseOver: (e)=>e.target.style.opacity = 0.88,
                onMouseOut: (e)=>e.target.style.opacity = 1,
                children: "Enviar reporte"
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
// ─── Pantalla 3: Alertas ─────────────────────────────────────────────────────
function PantallaAlertas() {
    const [filtro, setFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("todos");
    const filtradas = ALERTAS_BARRIO.filter((a)=>filtro === "todos" || a.nivel === filtro);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    marginBottom: 14
                },
                children: [
                    "todos",
                    "alto",
                    "medio",
                    "bajo"
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFiltro(f),
                        style: {
                            padding: "5px 12px",
                            borderRadius: 99,
                            fontSize: 12,
                            cursor: "pointer",
                            border: filtro === f ? "none" : "0.5px solid #d1d5db",
                            background: filtro === f ? f === "todos" ? COLORS.brand : nivelColor(f).dot : "#f9fafb",
                            color: filtro === f ? "#fff" : "#6b7280",
                            fontWeight: filtro === f ? 500 : 400,
                            transition: "all .15s"
                        },
                        children: f === "todos" ? "Todos" : f === "alto" ? "Alto" : f === "medio" ? "Medio" : "Bajo"
                    }, f, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 11,
                    color: "#9ca3af",
                    marginBottom: 12
                },
                children: [
                    "Actualizado hace 2 min · ",
                    filtradas.length,
                    " zonas"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            filtradas.map((a)=>{
                const c = nivelColor(a.nivel);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "10px 12px",
                        marginBottom: 8,
                        borderRadius: 8,
                        background: "#f9fafb",
                        borderLeft: `3px solid ${c.dot}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: "#111827"
                                    },
                                    children: a.barrio
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SeguroCali.jsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        color: "#9ca3af"
                                    },
                                    children: [
                                        a.reportes,
                                        " rep."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/SeguroCali.jsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 12,
                                color: "#6b7280",
                                marginTop: 3,
                                lineHeight: 1.5
                            },
                            children: a.descripcion
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NivelTag, {
                            nivel: a.nivel
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 390,
                            columnNumber: 13
                        }, this)
                    ]
                }, a.barrio, true, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 377,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 347,
        columnNumber: 5
    }, this);
}
// ─── Pantalla 4: SOS ─────────────────────────────────────────────────────────
function PantallaSOS() {
    const [activado, setActivado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSOS = ()=>{
        setActivado(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos)=>console.log("GPS:", pos.coords.latitude, pos.coords.longitude), ()=>{});
        }
        setTimeout(()=>setActivado(false), 4000);
    };
    const emergencias = [
        {
            num: "123",
            label: "Policía Nacional",
            tel: "tel:123"
        },
        {
            num: "112",
            label: "Emergencias generales",
            tel: "tel:112"
        },
        {
            num: "165",
            label: "Denuncia anónima",
            tel: "tel:165"
        },
        {
            num: "119",
            label: "Línea de víctimas",
            tel: "tel:119"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 13,
                    color: "#6b7280",
                    lineHeight: 1.6,
                    marginBottom: 20
                },
                children: "Si estás en peligro, activa el botón SOS. Tu ubicación GPS se enviará de forma anónima al sistema de emergencias."
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSOS,
                        style: {
                            width: 100,
                            height: 100,
                            borderRadius: "50%",
                            background: activado ? "#15803d" : COLORS.alto,
                            border: "none",
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all .3s",
                            boxShadow: activado ? "none" : `0 0 0 8px ${COLORS.altoBg}`,
                            letterSpacing: 1
                        },
                        children: activado ? "✓" : "SOS"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 12,
                            color: "#6b7280",
                            marginTop: 10
                        },
                        children: activado ? "Ubicación enviada — ayuda en camino" : "Toca para activar emergencia"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#374151",
                    marginBottom: 10
                },
                children: "Líneas de emergencia Cali"
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                children: emergencias.map(({ num, label, tel })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: tel,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            padding: "11px 14px",
                            background: "#f9fafb",
                            borderRadius: 8,
                            textDecoration: "none",
                            border: "0.5px solid #e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: COLORS.brand,
                                    minWidth: 40
                                },
                                children: num
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 464,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: "#374151"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 468,
                                columnNumber: 13
                            }, this)
                        ]
                    }, num, true, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 452,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
// ─── Pantalla 5: Dashboard institucional ────────────────────────────────────
function PantallaDashboard({ reportes }) {
    const [filtroDash, setFiltroDash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("todos");
    const stats = {
        total: reportes.length,
        alto: reportes.filter((r)=>r.nivel === "alto").length,
        medio: reportes.filter((r)=>r.nivel === "medio").length,
        bajo: reportes.filter((r)=>r.nivel === "bajo").length
    };
    const filtrados = filtroDash === "todos" ? reportes : reportes.filter((r)=>r.nivel === filtroDash);
    const recientes = [
        ...filtrados
    ].sort((a, b)=>new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 10);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: COLORS.dark,
                    borderRadius: 10,
                    padding: "10px 14px",
                    marginBottom: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 500
                        },
                        children: "Panel institucional"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 10,
                            color: "#4ade80"
                        },
                        children: "Policía Metropolitana"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 498,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 16
                },
                children: [
                    {
                        label: "Reportes hoy",
                        val: stats.total,
                        color: "#111827"
                    },
                    {
                        label: "Zonas activas",
                        val: 12,
                        color: "#111827"
                    },
                    {
                        label: "Nivel alto",
                        val: stats.alto,
                        color: COLORS.alto
                    },
                    {
                        label: "Nivel bajo",
                        val: stats.bajo,
                        color: COLORS.bajo
                    }
                ].map(({ label, val, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#f9fafb",
                            borderRadius: 8,
                            padding: "10px 12px",
                            border: "0.5px solid #e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 22,
                                    fontWeight: 600,
                                    color
                                },
                                children: val
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: "#6b7280",
                                    marginTop: 2
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 519,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapaCalor, {
                    reportes: reportes
                }, void 0, false, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 531,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 530,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    marginBottom: 10
                },
                children: [
                    "todos",
                    "alto",
                    "medio",
                    "bajo"
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFiltroDash(f),
                        style: {
                            padding: "4px 10px",
                            borderRadius: 99,
                            fontSize: 11,
                            cursor: "pointer",
                            border: filtroDash === f ? "none" : "0.5px solid #d1d5db",
                            background: filtroDash === f ? f === "todos" ? COLORS.brand : nivelColor(f).dot : "#f9fafb",
                            color: filtroDash === f ? "#fff" : "#6b7280",
                            transition: "all .15s"
                        },
                        children: f === "todos" ? "Todos" : f.charAt(0).toUpperCase() + f.slice(1)
                    }, f, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 537,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflowX: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    "Barrio",
                                    "Tipo",
                                    "Hora",
                                    "Nivel"
                                ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            textAlign: "left",
                                            padding: "6px 8px",
                                            borderBottom: "0.5px solid #e5e7eb",
                                            color: "#6b7280",
                                            fontWeight: 500,
                                            fontSize: 11
                                        },
                                        children: col
                                    }, col, false, {
                                        fileName: "[project]/app/components/SeguroCali.jsx",
                                        lineNumber: 561,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 559,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 558,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: recientes.map((r)=>{
                                const c = nivelColor(r.nivel);
                                const hora = new Date(r.timestamp).toLocaleTimeString("es-CO", {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                });
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "7px 8px",
                                                borderBottom: "0.5px solid #f3f4f6",
                                                color: "#111827"
                                            },
                                            children: r.barrio
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SeguroCali.jsx",
                                            lineNumber: 575,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "7px 8px",
                                                borderBottom: "0.5px solid #f3f4f6",
                                                color: "#374151"
                                            },
                                            children: r.categoria
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SeguroCali.jsx",
                                            lineNumber: 576,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "7px 8px",
                                                borderBottom: "0.5px solid #f3f4f6",
                                                color: "#6b7280"
                                            },
                                            children: hora
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SeguroCali.jsx",
                                            lineNumber: 577,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "7px 8px",
                                                borderBottom: "0.5px solid #f3f4f6"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    padding: "2px 7px",
                                                    borderRadius: 99,
                                                    background: c.bg,
                                                    color: c.text,
                                                    fontWeight: 500
                                                },
                                                children: r.nivel
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SeguroCali.jsx",
                                                lineNumber: 579,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SeguroCali.jsx",
                                            lineNumber: 578,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, r.id, true, {
                                    fileName: "[project]/app/components/SeguroCali.jsx",
                                    lineNumber: 574,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 557,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 556,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 496,
        columnNumber: 5
    }, this);
}
// ─── Barra de navegación ─────────────────────────────────────────────────────
function NavBar({ pantalla, setPantalla }) {
    const items = [
        {
            id: "mapa",
            label: "Mapa",
            icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "2",
                            width: "16",
                            height: "16",
                            rx: "3",
                            stroke: active ? COLORS.brand : "#9ca3af",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 601,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "10",
                            cy: "10",
                            r: "3",
                            stroke: active ? COLORS.brand : "#9ca3af",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 602,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 600,
                    columnNumber: 7
                }, this)
        },
        {
            id: "reportar",
            label: "Reportar",
            icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 4v12M4 10h12",
                        stroke: active ? COLORS.brand : "#9ca3af",
                        strokeWidth: "1.8",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 606,
                    columnNumber: 7
                }, this)
        },
        {
            id: "alertas",
            label: "Alertas",
            icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 3a5 5 0 015 5v4l1.5 2.5h-13L5 12V8a5 5 0 015-5z",
                            stroke: active ? COLORS.brand : "#9ca3af",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 612,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8 16a2 2 0 004 0",
                            stroke: active ? COLORS.brand : "#9ca3af",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 613,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 611,
                    columnNumber: 7
                }, this)
        },
        {
            id: "sos",
            label: "SOS",
            icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "10",
                            cy: "10",
                            r: "7",
                            stroke: COLORS.alto,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 618,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 6.5v4",
                            stroke: COLORS.alto,
                            strokeWidth: "1.8",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 619,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "10",
                            cy: "13.5",
                            r: "1",
                            fill: COLORS.alto
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 620,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 617,
                    columnNumber: 7
                }, this)
        },
        {
            id: "dashboard",
            label: "Panel",
            icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "2",
                            width: "7",
                            height: "7",
                            rx: "1.5",
                            stroke: active ? COLORS.brand : "#9ca3af",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 625,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "11",
                            y: "2",
                            width: "7",
                            height: "7",
                            rx: "1.5",
                            stroke: active ? COLORS.brand : "#9ca3af",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 626,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "11",
                            width: "7",
                            height: "7",
                            rx: "1.5",
                            stroke: active ? COLORS.brand : "#9ca3af",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 627,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "11",
                            y: "11",
                            width: "7",
                            height: "7",
                            rx: "1.5",
                            stroke: active ? COLORS.brand : "#9ca3af",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SeguroCali.jsx",
                            lineNumber: 628,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SeguroCali.jsx",
                    lineNumber: 624,
                    columnNumber: 7
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            borderTop: "0.5px solid #e5e7eb",
            background: "#fff"
        },
        children: items.map(({ id, label, icon })=>{
            const active = pantalla === id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setPantalla(id),
                style: {
                    flex: 1,
                    padding: "8px 4px 6px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    color: active ? COLORS.brand : "#9ca3af",
                    fontSize: 10,
                    fontWeight: active ? 500 : 400,
                    transition: "color .15s"
                },
                children: [
                    icon(active),
                    label
                ]
            }, id, true, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 641,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/app/components/SeguroCali.jsx",
        lineNumber: 634,
        columnNumber: 5
    }, this);
}
function SeguroCali() {
    const [pantalla, setPantalla] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("mapa");
    const [reportes, setReportes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(SEED_REPORTS);
    const agregarReporte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nuevo)=>{
        setReportes((prev)=>[
                nuevo,
                ...prev
            ]);
    }, []);
    const titulos = {
        mapa: "SeguroCali",
        reportar: "Nuevo reporte",
        alertas: "Alertas activas",
        sos: "Emergencia SOS",
        dashboard: "Panel institucional"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: #f3f4f6; font-family: system-ui, -apple-system, sans-serif; }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 681,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 430,
                    margin: "0 auto",
                    background: "#fff",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "system-ui, -apple-system, sans-serif"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: COLORS.dark,
                            padding: "6px 16px",
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 10,
                            color: "#a3e6b0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "9:41"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Cali, Valle del Cauca"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 705,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: COLORS.dark,
                            padding: "10px 16px 12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 28,
                                            height: 28,
                                            borderRadius: 7,
                                            background: COLORS.brandMid,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 14,
                                            color: "#fff",
                                            fontWeight: 700
                                        },
                                        children: "S"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SeguroCali.jsx",
                                        lineNumber: 714,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#fff",
                                            fontSize: 15,
                                            fontWeight: 600,
                                            letterSpacing: 0.3
                                        },
                                        children: titulos[pantalla]
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SeguroCali.jsx",
                                        lineNumber: 720,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontSize: 11,
                                    color: "#a3e6b0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveDot, {}, void 0, false, {
                                        fileName: "[project]/app/components/SeguroCali.jsx",
                                        lineNumber: 725,
                                        columnNumber: 13
                                    }, this),
                                    "En vivo · ",
                                    reportes.length,
                                    " reportes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 709,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: "auto",
                            padding: "14px 16px"
                        },
                        children: [
                            pantalla === "mapa" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PantallaMapa, {
                                reportes: reportes
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 732,
                                columnNumber: 40
                            }, this),
                            pantalla === "reportar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PantallaReportar, {
                                onReporteEnviado: agregarReporte
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 733,
                                columnNumber: 40
                            }, this),
                            pantalla === "alertas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PantallaAlertas, {}, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 734,
                                columnNumber: 40
                            }, this),
                            pantalla === "sos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PantallaSOS, {}, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 735,
                                columnNumber: 40
                            }, this),
                            pantalla === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PantallaDashboard, {
                                reportes: reportes
                            }, void 0, false, {
                                fileName: "[project]/app/components/SeguroCali.jsx",
                                lineNumber: 736,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 731,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavBar, {
                        pantalla: pantalla,
                        setPantalla: setPantalla
                    }, void 0, false, {
                        fileName: "[project]/app/components/SeguroCali.jsx",
                        lineNumber: 740,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SeguroCali.jsx",
                lineNumber: 690,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0quvj.g._.js.map