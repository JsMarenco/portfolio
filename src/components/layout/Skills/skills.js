import React from 'react'
import { Github, Javascript, Mui, ReactJs, Solidity, Typescript } from '../Svg'

export default function SkillsJson() {
  const skills = [
    {
      name: "Typescript",
      icon: <Typescript />
    },
    {
      name: "ReactJs",
      icon: <ReactJs />
    },
    {
      name: "Mui",
      icon: <Mui />
    },
    {
      name: "Solidty",
      icon: <Solidity />
    },
    {
      name: "Github",
      icon: <Github />
    },
    {
      name: "Javascript",
      icon: <Javascript />
    }
  ]

  return skills
}
