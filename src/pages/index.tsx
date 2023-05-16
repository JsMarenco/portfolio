import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="max-w-[95%] mx-auto px-2">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export interface Repo {
  owner: {
    avatar_url: string
  }
  created_at: string
  description: string
  name: string
  html_url: string
  homepage?: string
  topics: string[]
}

export const fetchRepos = async () => {
  const res = await fetch('https://api.github.com/users/jsmarenco/repos')
  const data: Repo[] = await res.json()

  const Repos: Repo[] = data.filter((rawRepo: Repo) => {
    if (rawRepo.description && rawRepo.description.includes(':0')) {
      rawRepo.description = rawRepo.description.replace(':0', '')
      return true
    }

    return false
  })

  Repos.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  return Repos
}
