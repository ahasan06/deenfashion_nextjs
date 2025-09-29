// app/layout.jsx
import "./globals.css"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

export const metadata = {
  title: "Deen Fashion",
  description: "Premium apparel frontend",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
