import type { Metadata } from "next"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Chengwei Wang | Frontend Systems Engineer",
  description: "Frontend Systems Engineer specializing in Web3 and data-intensive interfaces",
}

const themeInitScript = `
(function() {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.toggle('dark', theme === 'dark');
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-canvas text-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
