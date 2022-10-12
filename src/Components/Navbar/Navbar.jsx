import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex bg-gradient-to-r to-teal-700 from-cyan-500 px-3 py-5 sm:px-4 md:px-10 items-center justify-between">
      <Link to="/">
        <h2 className="text-3xl text-white font-bold">Quizzy</h2>
      </Link>
      <ul className="flex items-center gap-4 duration-500 text-white text-xl">
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
