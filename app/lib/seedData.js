export const CALI_CENTER = { lat: 3.4516, lng: -76.5320 };

export const SEED_REPORTS = [
  { id: 1, lat: 3.4380, lng: -76.5220, categoria: "Riña / violencia", barrio: "El Calvario", descripcion: "Pelea entre grupos frente al parque", nivel: "alto", timestamp: "2025-03-30T09:37:00Z" },
  { id: 2, lat: 3.4360, lng: -76.5240, categoria: "Porte de armas", barrio: "El Calvario", descripcion: "Persona con arma visible", nivel: "alto", timestamp: "2025-03-30T09:21:00Z" },
  { id: 3, lat: 3.4370, lng: -76.5210, categoria: "Riña / violencia", barrio: "Centro", descripcion: "Altercado en la vía pública", nivel: "alto", timestamp: "2025-03-30T08:50:00Z" },
  { id: 4, lat: 3.4150, lng: -76.4900, categoria: "Microtráfico", barrio: "Aguablanca", descripcion: "Actividad sospechosa en la esquina", nivel: "alto", timestamp: "2025-03-30T09:10:00Z" },
  { id: 5, lat: 3.4120, lng: -76.4870, categoria: "Porte de armas", barrio: "Aguablanca", descripcion: "Hombres armados en el sector", nivel: "alto", timestamp: "2025-03-30T08:45:00Z" },
  { id: 6, lat: 3.4100, lng: -76.4920, categoria: "Riña / violencia", barrio: "Distrito de Aguablanca", descripcion: "Tensión entre grupos", nivel: "alto", timestamp: "2025-03-30T08:20:00Z" },
  { id: 7, lat: 3.4130, lng: -76.4850, categoria: "Extorsión negocio", barrio: "Aguablanca", descripcion: "Cobro de vacuna a tienda local", nivel: "alto", timestamp: "2025-03-30T07:55:00Z" },
  { id: 8, lat: 3.4480, lng: -76.5580, categoria: "Vehículo sospechoso", barrio: "Siloé", descripcion: "Moto sin placa rondando el sector", nivel: "medio", timestamp: "2025-03-30T09:14:00Z" },
  { id: 9, lat: 3.4500, lng: -76.5600, categoria: "Microtráfico", barrio: "Siloé", descripcion: "Venta de sustancias en la esquina", nivel: "medio", timestamp: "2025-03-30T08:30:00Z" },
  { id: 10, lat: 3.4460, lng: -76.5560, categoria: "Riña / violencia", barrio: "Siloé", descripcion: "Altercado en zona residencial", nivel: "medio", timestamp: "2025-03-30T07:40:00Z" },
  { id: 11, lat: 3.4520, lng: -76.5420, categoria: "Vehículo sospechoso", barrio: "Alameda", descripcion: "Carro estacionado sospechoso", nivel: "medio", timestamp: "2025-03-30T08:55:00Z" },
  { id: 12, lat: 3.4540, lng: -76.5440, categoria: "Extorsión negocio", barrio: "Alameda", descripcion: "Amenazas a comerciante local", nivel: "medio", timestamp: "2025-03-30T08:10:00Z" },
  { id: 13, lat: 3.4560, lng: -76.5310, categoria: "Porte de armas", barrio: "San Nicolás", descripcion: "Persona sospechosa en el parque", nivel: "medio", timestamp: "2025-03-30T07:30:00Z" },
  { id: 14, lat: 3.4490, lng: -76.5290, categoria: "Vehículo sospechoso", barrio: "La Flora", descripcion: "Motos sin placas frecuentes", nivel: "medio", timestamp: "2025-03-30T06:55:00Z" },
  { id: 15, lat: 3.4620, lng: -76.5280, categoria: "Otro", barrio: "Granada", descripcion: "Situación resuelta, zona tranquila", nivel: "bajo", timestamp: "2025-03-30T08:40:00Z" },
  { id: 16, lat: 3.4600, lng: -76.5260, categoria: "Otro", barrio: "El Peñón", descripcion: "Sin novedad, ruta segura confirmada", nivel: "bajo", timestamp: "2025-03-30T08:00:00Z" },
  { id: 17, lat: 3.4320, lng: -76.5370, categoria: "Otro", barrio: "Ciudad Jardín", descripcion: "Vecinos activos, zona vigilada", nivel: "bajo", timestamp: "2025-03-30T07:15:00Z" },
  { id: 18, lat: 3.4700, lng: -76.5420, categoria: "Riña / violencia", barrio: "Versalles", descripcion: "Pelea en sector comercial", nivel: "medio", timestamp: "2025-03-30T06:30:00Z" },
  { id: 19, lat: 3.4250, lng: -76.5100, categoria: "Microtráfico", barrio: "Villanueva", descripcion: "Actividad nocturna reportada", nivel: "medio", timestamp: "2025-03-30T05:50:00Z" },
  { id: 20, lat: 3.4400, lng: -76.5450, categoria: "Porte de armas", barrio: "Terrón Colorado", descripcion: "Reporte de arma en vía pública", nivel: "alto", timestamp: "2025-03-30T05:20:00Z" },
];

export const ALERTAS_BARRIO = [
  { barrio: "El Calvario / Centro", descripcion: "Alto historial de riñas nocturnas. Evitar zona entre 19h y 5h.", nivel: "alto", reportes: 8 },
  { barrio: "Aguablanca — D. Regional", descripcion: "Tensión elevada reportada por residentes. Circular en grupos.", nivel: "alto", reportes: 7 },
  { barrio: "Terrón Colorado", descripcion: "Reporte de porte de armas. Patrullaje reforzado solicitado.", nivel: "alto", reportes: 5 },
  { barrio: "Siloé — vía principal", descripcion: "Actividad inusual reportada. Precaución al transitar.", nivel: "medio", reportes: 4 },
  { barrio: "Alameda / San Nicolás", descripcion: "Vehículos sospechosos frecuentes. Mantén precaución.", nivel: "medio", reportes: 3 },
  { barrio: "Villanueva", descripcion: "Actividad nocturna inusual. Sin confirmaciones adicionales.", nivel: "medio", reportes: 2 },
  { barrio: "Granada / El Peñón", descripcion: "Sin incidentes en las últimas 6 horas. Zona activa y comercial.", nivel: "bajo", reportes: 1 },
  { barrio: "Ciudad Jardín", descripcion: "Comunidad activa, sin reportes recientes de violencia.", nivel: "bajo", reportes: 0 },
];
