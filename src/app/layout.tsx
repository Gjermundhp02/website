import './global.css'

export const metadata = {
  title: 'Gjermund H Pedersen',
  description: 'About me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
