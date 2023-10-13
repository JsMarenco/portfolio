// Third-party dependencies
import Link from "next/link"
import { Button } from "@nextui-org/button"
import { FiArrowRight, FiMail } from "react-icons/fi"

// Current project dependencies

const Hero = () => {
  return (
    <section className="w-full h-screen z-50 flex items-center justify-center flex-col gap-3">
      <h1 className="text-center z-30 font-bold text-white text-5xl">
        Angel Marenco
      </h1>

      <h6 className="text-sm z-50 text-white font-normal">
        Yep another full stack developer
      </h6>

      <div className="mt-4 flex items-center justify-center gap-3 z-40">
        <Link href={"#contact"}>
          <Button
            endContent={<FiMail />}
            size="md"
            variant="bordered"
            className="text-white font-semibold"
          >
            Conect me
          </Button>
        </Link>

        <Link href={"#projects"}>
          <Button
            endContent={<FiArrowRight />}
            size="md"
            variant="solid"
            className="text-black font-semibold"
          >
            Projects
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
