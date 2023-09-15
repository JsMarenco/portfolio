// Third-party dependencies
import { Button, Image } from "@nextui-org/react"
import { FiDownload } from "react-icons/fi"

// Current project dependencies
import userLogo from "@/assets/user/logo.svg"

const AboutMe = () => {
  return (
    <section className="container__base" id="about_me">
      <h2 className="text-center text-white mb-4 font-medium text-xl">
        About me
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-2 text-center gap-4 [&>div]:flex [&>div]:items-center">
        <div className="justify-center">
          <Image
            src={userLogo.src}
            alt="User Logo"
            className="w-64 shrink-0 rounded-xl overflow-hidden bg-black"
          />
        </div>

        <div className="justify-center gap-3 flex-col">
          <p className="text-md font-normal max-w-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, modi.
            Mollitia voluptates sequi ea cupiditate fuga. Corporis veritatis
            dignissimos, quo recusandae odit expedita a eius libero ea ipsam ex
            minus!
          </p>

          <Button variant="solid" endContent={<FiDownload />}>
            Download CV
          </Button>
        </div>
      </article>
    </section>
  )
}

export default AboutMe
