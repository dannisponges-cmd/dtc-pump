export const metadata = {
  title: 'DTC Pump',
  description: 'Hydraulic Pumps Website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
