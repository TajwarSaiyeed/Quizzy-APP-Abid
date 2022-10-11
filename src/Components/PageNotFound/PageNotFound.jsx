import React from 'react'
import { Link } from 'react-router-dom'
import IMG from '../../image/4o4.jpg'

const PageNotFound = () => {
  return (
    <div>
      <img src={IMG} className="h-5/6 lg:h-1/4 w-full" alt="" />
      <Link to="/">
        <button className="my-5 bg-teal-500 p-5 text-white rounded-lg">
          Back to Home
        </button>
      </Link>
    </div>
  )
}

export default PageNotFound
