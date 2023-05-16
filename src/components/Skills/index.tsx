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
import reduxtoolkit from '@/assets/reduxtoolkit.png'

export default function Skills() {
  return (
    <section id="skills" className="my-20 px-5">
      <h6 className="text-2xl text-center font-bold mb-3 text-gray-500">
        My projects
      </h6>

      <div className="flex align-top justify-center gap-3 flex-wrap max-w-xl mx-auto ">
        {mySkills.map((skill) => (
          <article
            key={skill.label}
            className="p-3 rounded-xl border border-gray-500 flex-shrink-0"
          >
            <Image
              src={skill.imageSrc}
              alt={`${skill.label} skill image`}
              width={90}
              height={90}
              className="mb-5 w-20 h-20 mx-auto"
            />

            <p className="text-center text-gray-500">{skill.label}</p>
          </article>
        ))}
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
    imageSrc: reduxtoolkit.src,
  },
]
