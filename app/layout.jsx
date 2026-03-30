export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, background: "#f3f4f6" }}>
        {children}
      </body>
    </html>
  );
}
