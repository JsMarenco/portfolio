// Third-party dependencies
import { FaPython, FaReact, FaFigma, FaGithub } from "react-icons/fa6"
import { TbBrandNextjs } from "react-icons/tb"
import {
  SiJest,
  SiEslint,
  SiTailwindcss,
  SiTypescript,
  SiMui,
  SiRedux,
  SiExpress,
} from "react-icons/si"

// Current project dependencies

const tools = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "NextJs",
    icon: <TbBrandNextjs />,
  },
  {
    name: "Jest",
    icon: <SiJest />,
  },
  {
    name: "Eslint",
    icon: <SiEslint />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "MUI",
    icon: <SiMui />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
]

const Tooling = () => {
  return (
    <section className="container__base" id="tooling">
      <h2 className="text-center text-white mb-4 font-medium text-xl">
        Tooling
      </h2>

      <article className="grid grid-cols-4 gap-3">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="border-2 p-3 text-white text-lg font-normal bg-black bg-opacity-90 z-40 border-dotted rounded-xl flex items-center justify-center gap-2"
          >
            <span>{tool.icon}</span>
            <span className="hidden md:flex">{tool.name}</span>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Tooling
