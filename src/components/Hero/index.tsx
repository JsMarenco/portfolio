/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import heroImage from '@/assets/hero_image.svg'
import { useEffect, useState } from 'react'
import { Repo, fetchRepos } from '@/pages'

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
    <section className="flex flex-col-reverse sm:flex-row items-center my-5">
      <div className="md:w-1/2 text-center md:text-left xs:mt-5">
        <span className="text-lg text-gray-600">{user.role}</span>

        <h1 className="text-gray-600 text-7xl font-bold my-3">{user.name}</h1>

        <p className="text-gray-600 text-sm mt-4"> {user.description} </p>
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
