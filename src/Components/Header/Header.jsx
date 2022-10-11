import React from 'react'
import Me from '../../image/me.png'
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from 'react-icons/ai'
const Header = () => {
  return (
    <div>
      <h1 className="my-3 text-4xl font-bold text-teal-800 w-full">
        Welcome To My Quizzy App
      </h1>
      <div className="relative mt-20 mb-15 items-center mx-auto bg-gradient-to-b from-teal-500 dark:from-sky-200 rounded-full w-80 h-80 lg:w-96 lg:h-96 overflow-hidden">
        <img src={Me} className="object-cover w-full h-full" alt="" />
      </div>
      <h2 className="uppercase font-medium text-4xl md:text-5xl lg:text-6xl py-2 text-teal-600">
        <span className="text-6xl normal-case md:text-8xl lg:text-10xl">
          Hi I'm
        </span>{' '}
        Tajwar Saiyeed
      </h2>
      <h3 className="text-xl text-dark md:text-3xl lg:text-4xl py-2">
        Learning Web Development With Programming Hero
      </h3>
      <div className="flex justify-center text-5xl gap-4 my-5 py-2">
        <a href="/">
          <AiFillTwitterCircle className="text-cyan-600 dark:text-cyan-400" />
        </a>
        <a href="/">
          <AiFillLinkedin className="text-blue-700 dark:text-blue-500" />
        </a>
        <a href="/">
          <AiFillYoutube className="text-red-500 dark:text-red-700" />
        </a>
      </div>
    </div>
  )
}

export default Header
