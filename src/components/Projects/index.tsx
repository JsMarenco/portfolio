import { useEffect, useState } from 'react'

import { Repo, fetchRepos } from '@/pages'

export default function Projects() {
  const [projects, setProjects] = useState([] as Repo[])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ; (async () => {
      const repos = await fetchRepos()
      setProjects(repos)
      setLoading(false)
    })()
  }, [])

  return (
    <section
      id="projects"
      className="w-full h-screen snap-center overflow-auto p-8 scrollbar-hide"
    >
      <h6 className="text-2xl text-center font-bold mb-3 text-black snap-center">
        My projects
      </h6>

      {projects.map((project) => (
        <article
          className="border shadow-lg border-black rounded-xl p-4 my-3 max-w-xl mx-auto"
          key={project.homepage}
        >
          <h6
            onClick={() =>
              window.open(project.homepage, '_blank', 'noopener,noreferrer')
            }
            className="underline text-black text-[19px] hover:text-gray-400 cursor-pointer font-bold capitalize mb-3"
          >
            {project.name
              .replace(/[-_]/g, ' ')
              .replace(/\.github\.io$/, '') // Remove .github.io
              .toLowerCase()
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </h6>

          <p className="text-black">{project.description}</p>

          <div className="flex align-middle justify-start flex-wrap my-2">
            {project.topics.map((topic, index) => (
              <span
                className="text-[11px] text-center bg-black text-white py-1 px-3 m-1 rounded-xl capitalize"
                key={index}
              >
                {topic.replace(/[-_]/g, ' ')}
              </span>
            ))}
          </div>

          {/* <button
            className="w-8 h-8 border shadow-lg border-black rounded-full p-1 mr-2"
            onClick={() =>
              window.open(`https://github.com/JsMarenco/${project.name}`, '_blank', 'noopener,noreferrer')
            }
          >
            <span>
              <i className="fa-brands fa-github"></i>
            </span>
          </button>

          <button
            className="w-8 h-8 border shadow-lg border-black rounded-full p-1 mr-2"
            onClick={() =>
              window.open(project.homepage, '_blank', 'noopener,noreferrer')
            }
          >
            <span>
              <i className="fa-solid fa-eye"></i>
            </span>
          </button> */}
        </article>
      ))}

      {loading && <h3 className="text-3xl text-center font-semibold my-5 text-black mx-auto">Loading project...</h3>}
    </section>
  )
}
