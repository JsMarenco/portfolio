/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import heroImage from '@/assets/hero_image.svg'
import { useEffect, useState } from 'react'
import { Repo, fetchRepos } from '@/pages'
import { useRouter } from 'next/router'

const initialUser = {
  role: 'Full Stack',
  name: 'Angel Marenco',
  description:
    'Hello, I am Angel Marenco, a full stack developer with two years of  experience.I specialize in ReactJS, NextJS, and TypeScript.',
  image: heroImage,
}

interface User {
  role: string
  name: string
  description: string
  image: string
}

export default function Hero() {
  const router = useRouter()

  const [user, setUser] = useState<User>(initialUser)

  useEffect(() => {
    ; (async () => {
      const AllRepos = await fetchRepos()

      const jsmarencoRepo = AllRepos.find(
        (repo: Repo) => repo.name === 'jsmarenco'
      )

      if (jsmarencoRepo) {
        setUser((prevUser) => ({
          ...prevUser,
          description: jsmarencoRepo.description,
          image: jsmarencoRepo?.homepage || prevUser.image,
        }))
      }
    })()
  }, [])

  return (
    <section className="flex align-center justify-center flex-col-reverse sm:flex-row w-full h-screen snap-center px-4 sm:px-8">
      <div className="md:w-1/2 text-center md:text-left mt-4 sm:mt-0">
        <span className="text-lg text-gray-600">{user.role}</span>

        <h1 className="text-gray-600 text-5xl font-bold my-3 sm:text-7xl">
          {user.name}
        </h1>

        <p className="text-gray-600 text-sm mt-4"> {user.description} </p>

        <nav className="flex align-center justify-center sm:justify-start gap-2 mt-3">
          <button
            className="rounded-lg px-3 py-1 text-center text-black bg-white border border-black hover:bg-black hover:text-white"
            onClick={() => router.push('/#projects')}
          >
            <span>Projects</span>
          </button>

          <button
            className="rounded-lg px-3 py-1 text-center text-white bg-black border border-black hover:bg-white hover:text-black"
            onClick={() => router.push('/#contact')}
          >
            <span>Contact</span>
          </button>
        </nav>
      </div>

      <div className="md:w-1/2">
        <Image
          src={user.image}
          alt="hero image"
          width={350}
          height={350}
          className="w-full mx-auto rounded-xl"
        />
      </div>
    </section>
  )
}
