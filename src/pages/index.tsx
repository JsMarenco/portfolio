import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="max-w-[95%] mx-auto px-2">
      <Header />
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
  const data = await res.json()

  const Repos = data.filter((rawRepo: Repo) => {
    if (rawRepo.description && rawRepo.description.includes(':0')) {
      rawRepo.description = rawRepo.description.replace(':0', '')
      return true
    }

    return false
  })

  return Repos
}
