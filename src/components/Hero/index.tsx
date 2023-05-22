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
    ;(async () => {
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
    <section className="block sm:flex align-center justify-center w-full h-screen scrollbar-hide py-4 overflow-auto sm:flex-row max-w-[1200px] px-4 sm:px-6 mx-auto snap-center">
      <div className="flex align-center justify-center flex-col-reverse sm:flex-row">
        <div className="md:w-1/2 text-center md:text-left mt-4 sm:mt-0">
          <span className="text-lg font-semibold text-black">{user.role}</span>

          <h1 className="text-black text-5xl font-bold my-3 sm:text-7xl">
            {user.name}
          </h1>

          <p className="text-black text-ml leading-5 font-medium mt-4">
            {' '}
            {user.description}{' '}
          </p>

          <nav className="flex align-center justify-center flex-col sm:flex-row sm:justify-start gap-2 mt-3">
            <button
              className="rounded-xl px-4 py-2 w-[250px] sm:max-w-[150px] md:max-w-[200px] text-center text-black bg-white border border-black hover:bg-black hover:text-white"
              onClick={() => router.push('/#projects')}
            >
              <span>Projects</span>
            </button>

            <button
              className="rounded-xl px-4 py-2 w-[250px] sm:max-w-[150px] md:max-w-[200px] text-center text-white bg-black border border-black hover:bg-white hover:text-black"
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
      </div>
    </section>
  )
}
