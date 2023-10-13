// Third-party dependencies

// Current project dependencies
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Tooling from "@/components/Tooling"
import Contact from "@/components/Contact"
import Projects from "@/components/Projects"

const Home = () => {
  return (
    <>
      <Hero />

      <main className="z-50 relative">
        <div className="w-full z-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#050E24"
              fillOpacity="1"
              d="M0,0L80,53.3C160,107,320,213,480,234.7C640,256,800,192,960,160C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="bg-[#050E24] py-12 flex items-center justify-center gap-24 flex-col w-full">
          <AboutMe />
          <Tooling />
          <Contact />
          <Projects />
        </div>
      </main>
    </>
  )
}

export default Home
