import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { Dark } from '../../App'

const Navbar = () => {
  const [darkMode, setDarkMode] = useContext(Dark)
  return (
    <nav className="flex bg-gradient-to-r to-teal-700 from-cyan-500 dark:to-teal-300 dark:from-cyan-400 px-3 py-5 sm:px-4 md:px-10 items-center justify-between">
      <Link to="/">
        <h2 className="text-3xl text-white dark:text-gray-100 font-bold">
          Quizzy
        </h2>
      </Link>
      <BsFillMoonStarsFill
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer text-black dark:text-white"
      />
      <ul className="flex items-center gap-4 duration-500 text-white dark:text-black text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'border-0 border-b-2 pb-2 duration-500' : undefined
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'border-0 border-b-2 pb-2 duration-500' : undefined
            }
            to="/statictis"
          >
            Statictis
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
