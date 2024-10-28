import "./globals.css"
import Navbar from "./Components/navbar.js"
import Footer from "./Components/footer"
import { Libre_Franklin } from "next/font/google"

const Font = Libre_Franklin({
  display: "swap",
  variable: "--font-default",
  subsets: ["latin"],
})

export const metadata = {
  title: "The Tech Show Media",
  description: "Content Creation, Advertising, Blogs, Development and Hosting Services by The Tech Show Media",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Font.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
