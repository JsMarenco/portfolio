"use client"

import { useCallback, useEffect, useState } from "react"

// Third-party dependencies
import { FaAngleUp } from "react-icons/fa6"
import { Button } from "@nextui-org/react"

// Current project dependencies

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    // Button is displayed after scrolling for 100 pixels
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false)
    }

    window.addEventListener("scroll", handleScrollButtonVisibility)

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility)
    }
  }, [])

  return (
    <>
      {showButton && (
        <div className="fixed bottom-8 right-8 z-50" role="presentation">
          <Button
            onClick={scrollToTop}
            className="bg-black text-white rounded-xl bg-opacity-30 dark:bg-opacity-10 backdrop-blur-lg drop-shadow-lg shadow-xl"
            aria-label="scroll back to top"
            radius="full"
            size="lg"
            isIconOnly
          >
            <FaAngleUp />
          </Button>
        </div>
      )}
    </>
  )
}

export default ScrollTop
