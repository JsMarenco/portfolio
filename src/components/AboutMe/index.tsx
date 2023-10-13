/* eslint-disable react/no-unescaped-entities */
// Third-party dependencies
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import { FiDownload } from "react-icons/fi"

// Current project dependencies
import userLogo from "@/assets/user/logo.svg"
import Link from "next/link"

const AboutMe = () => {
  return (
    <section className="container__base" id="about_me">
      <h2 className="text-center text-white mb-8 font-medium text-3xl">
        About me
      </h2>

      <article className="flex items-center justify-center flex-col text-center gap-4">
        <Image
          src={userLogo.src}
          alt="User Logo"
          className="w-64 shrink-0 rounded-xl overflow-hidden bg-black"
        />

        <div className="flex items-center justify-center gap-3 flex-col">
          <p className="text-md font-normal max-w-lg text-white block">
            Hello, I'm Angel Marenco, a full stack developer with two years of
            experience. I specialize in ReactJS, NextJS, and TypeScript and
            enjoy creating and maintaining web applications. When I'm not
            working, I enjoy constantly improving my skills.
          </p>

          <p className="text-md font-normal max-w-lg text-white block">
            In my free time, I'm happy to share my expertise in both areas to
            help others. In the future, I plan to continue expanding my
            programming knowledge.
          </p>
        </div>

        <Link href={"/assets/cv/Angel_Marenco_Full_ Stack_EN.pdf"} download>
          <Button variant="solid" endContent={<FiDownload />}>
            Download CV
          </Button>
        </Link>
      </article>
    </section>
  )
}

export default AboutMe
