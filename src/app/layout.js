"use client"
import "./globals.css"
import Navbar from "./Components/navbar.js"
import Footer from "./Components/footer"
import { Libre_Franklin } from "next/font/google"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Font = Libre_Franklin({
  display: "swap",
  variable: "--font-default",
  subsets: ["latin"],
})

// export const metadata = {
//   title: "The Tech Show Media",
//   description: "Content Creation, Advertising, Blogs, Development and Hosting Services by The Tech Show Media",
// }

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    })
  }, [])

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
