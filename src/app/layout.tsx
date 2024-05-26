import { ReactNode } from "react"

// Third-party dependencies
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

// Current project dependencies
import "../styles/globals.css"
import "../styles/background.css"
import Providers from "@/context/Providers"
import ScrollTop from "@/components/Buttons/ScrollTop"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jsmarenco.dev/"),
  title: "Home | JsMarenco",
  description: "Angel Marenco | Yep another full stack developer",
  applicationName: "JsMarenco Portfolio",
  authors: {
    name: "Angel Marenco",
    url: "https://www.linkedin.com/in/jsmarenco/",
  },
  generator: "jsmarenco, portfolio, angel marenco, developer, full stack",
  classification: "Portfolio",
  category: "portfolio",
  openGraph: {
    type: "website",
    siteName: "JsMarenco | portfolio",
    url: "",
    images: [
      {
        url: "/assets/screens/home.png",
        width: 800,
        height: 600,
      },
    ],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/icons/icon-192x192.png",
    apple: "/assets/icons/icon-192x192.png",
  },
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

          <ScrollTop />
        </Providers>
      </body>
    </html>
  )
}
