import Image from "next/image";
import Contact from "../Contact";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section className="w-full h-screen snap-center flex align-center justify-center flex-col gap-3 py-4">
      <h6 className="text-2xl text-center font-bold text-gray-700 mx-auto">
        About
      </h6>

      <section className="w-[250px] h-[250px] rounded-xl mx-auto overflow-hidden shadow-md shadow-gray-700">
        <Image
          src="https://avatars.githubusercontent.com/u/65215919?v=4"
          alt="Angel Marenco | JsMarenco avatar's"
          width={250}
          height={250}
        />
      </section>

      <p className="text-sm text-gray-500 font-semibold text-center sm:max-w-[50%] max-w-[90%] mx-auto">
        Hello, I'm Angel Marenco, a full stack developer with two years of
        experience. I specialize in ReactJS, NextJS, and TypeScript and enjoy
        creating and maintaining web applications. When I'm not working, I enjoy
        constantly improving my skills. In my free time, I'm happy to share my
        expertise in both areas to help others. In the future, I plan to
        continue expanding my programming knowledge.
      </p>

      <Contact />
    </section>
  )
}
