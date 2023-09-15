import { ReactNode } from "react"

// Third-party dependencies
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

// Current project dependencies
import "../styles/globals.css"
import "../styles/background.css"
import Providers from "@/context/Providers"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Home | JsMarenco",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <div
            className={
              "h-screen absolute w-full z-50 bg-transparent top-0 bottom-0 left-0 right-0 mx-auto"
            }
          >
            {children}
          </div>

          <div className={"app_bg bg-black"}></div>

          <div className="star-field z-1">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
        </Providers>
      </body>
    </html>
  )
}