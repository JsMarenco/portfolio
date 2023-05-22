import Image from 'next/image'
import figmaPng from '@/assets/figma.png'
import reactPng from '@/assets/reactjs.png'
import typescriptPng from '@/assets/typescript.png'
import javascriptPng from '@/assets/javascript.png'
import nextjsPng from '@/assets/nextjs.png'
import gitPng from '@/assets/git.png'
import mongodbPng from '@/assets/mongodb.png'
import muiPng from '@/assets/mui.png'
import tailwindPng from '@/assets/tailwind.png'
import reduxtoolkitPng from '@/assets/reduxtoolkit.png'
import jestPng from "@/assets/jest.png"

export default function Skills() {
  return (
    <section id="skills" className="w-full h-screen snap-center sm:p-8 p-4 overflow-auto scrollbar-hide block items-center justify-center sm:flex">
      <div>
        <h6 className="text-2xl text-center font-bold mb-3 text-black">
          My Skills
        </h6>

        <div className="flex align-top justify-center gap-3 flex-wrap max-w-xl mx-auto ">
          {mySkills.map((skill) => (
            <article
              key={skill.label}
              className="p-3 rounded-xl border border-black flex-shrink-0"
            >
              <Image
                src={skill.imageSrc}
                alt={`${skill.label} skill image`}
                width={95}
                height={95}
                className="mb-5 w-20 h-20 mx-auto flex-shrink-0"
              />

              <p className="text-center text-black font-semibold">{skill.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const mySkills = [
  {
    label: 'Figma',
    imageSrc: figmaPng.src,
  },
  {
    label: 'ReactJs',
    imageSrc: reactPng.src,
  },
  {
    label: 'TypeScript',
    imageSrc: typescriptPng.src,
  },
  {
    label: 'JavaScript',
    imageSrc: javascriptPng.src,
  },
  {
    label: 'NextJs',
    imageSrc: nextjsPng.src,
  },
  {
    label: 'Git',
    imageSrc: gitPng.src,
  },
  {
    label: 'MongoDB',
    imageSrc: mongodbPng.src,
  },
  {
    label: 'Material Ui',
    imageSrc: muiPng.src,
  },
  {
    label: 'Tailwind',
    imageSrc: tailwindPng.src,
  },
  {
    label: 'Redux Toolkit',
    imageSrc: reduxtoolkitPng.src,
  },
  {
    label: 'Jest',
    imageSrc: jestPng.src,
  },
]
