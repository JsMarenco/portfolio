// Third-party dependencies
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

// Current project dependencies
import pjNifafeis from "@/assets/projects/pj_nikafeis.png"
import pjClipCraftAI from "@/assets/projects/pj_clipcraftai.png"
import pjPomodoro from "@/assets/projects/pj_pomodoro.png"
import pjNasa from "@/assets/projects/pj_nasa.png"

const projects = [
  {
    preview: pjNifafeis.src,
    name: "Nikafeis",
    demo: "https://nikafeis.web.app/",
    description:
      "Nikafeis is a personal project, the objective is show all my skills and knowledge in a simple way. Refactoring this project.",
  },
  {
    preview: pjClipCraftAI.src,
    name: "Clip Craft AI",
    demo: "https://clip-craft-ai.vercel.app/",
    description:
      "is an automated video creator powered by AI and web scraping. Transforming TikTok content into engaging videos has never been easier.",
  },
  {
    preview: pjPomodoro.src,
    name: "Pomodoro",
    demo: "https://pomodoro.jsmarenco.dev/",
    description: "Boost your productivity with Pomodoro Technique.",
  },
  {
    preview: pjNasa.src,
    name: "Nasa",
    demo: "https://nasa.jsmarenco.dev/",
    description: "Discover the Wonders of the Universe.",
  },
]

const Projects = () => {
  return (
    <section
      className="rounded-xl max-w-4xl z-30 mx-auto w-[90%]"
      id="projects"
      aria-label="Projects Section"
    >
      <h2 className="text-center text-white mb-8 font-medium text-3xl">
        Projects
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        aria-label="Projects Grid"
      >
        {projects.map((project, index) => (
          <article
            key={index}
            className="shadow-lg overflow-hidden flex items-center justify-center flex-col gap-3 rounded-xl bg-[#091530] hover:bg-[#454545] shadow-slate-950"
            aria-label={`${project.name} Project`}
          >
            <Image
              src={project.preview}
              alt={`${project.name} project preview image`}
              role="img"
              className="rounded-t-none"
              aria-label={`${project.name} Project Preview`}
            />

            <div
              className="p-3 flex items-center justify-center gap-4 flex-col"
              aria-label={`${project.name} Project Details`}
              role="region"
            >
              <h6 className="text-center text-white text-xl font-medium">
                {project.name}
              </h6>

              <p className="text-center text-white text-sm">
                {project.description}
              </p>

              <Link
                href={project.demo}
                role="link"
                aria-label={`Link to ${project.name} demo`}
                target="_blank"
              >
                <Button endContent={<FiArrowRight />} className="">
                  View project
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
