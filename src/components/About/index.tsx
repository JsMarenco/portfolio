import Image from 'next/image'
import Contact from '../Contact'

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section
      id="contact"
      className="w-full h-screen overflow-auto scrollbar-hide block sm:flex items-center justify-center snap-center py-4"
    >
      <div className="flex items-center justify-center flex-col gap-4">
        <h6 className="text-2xl text-center font-bold text-black mx-auto">
          About
        </h6>

        <section className="w-[250px] h-[250px] flex-shrink-0 rounded-xl mx-auto overflow-hidden shadow-md shadow-gray-700">
          <Image
            src="https://avatars.githubusercontent.com/u/65215919?v=4"
            alt="Angel Marenco | JsMarenco avatar's"
            width={250}
            height={250}
          />
        </section>

        <p className="text-black font-medium leading-6 text-center max-w-[90%] sm:max-w-[650px] mx-auto">
          Hello, I'm Angel Marenco, a full stack developer with two years of
          experience. I specialize in ReactJS, NextJS, and TypeScript and enjoy
          creating and maintaining web applications. When I'm not working, I
          enjoy constantly improving my skills. In my free time, I'm happy to
          share my expertise in both areas to help others. In the future, I plan
          to continue expanding my programming knowledge.
        </p>

        <Contact />
      </div>
    </section>
  )
}
