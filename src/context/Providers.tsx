"use client"

import { FC, ReactNode } from "react"

// Third-party dependencies
import { NextUIProvider } from "@nextui-org/react"

// Current project dependencies

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  )
}

export default Providers
