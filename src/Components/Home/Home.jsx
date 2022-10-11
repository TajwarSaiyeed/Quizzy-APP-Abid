import React from 'react'
import { useLoaderData } from 'react-router-dom'
import QuizCard from '../QuizCard/QuizCard'

import Header from '../Header/Header'

const Home = () => {
  const quiz = useLoaderData()
  const { data } = quiz

  return (
    <div className="px-4 py-5 sm:px-5 md:px-10">
      <Header />

      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {data.map((q) => (
          <QuizCard key={q.id} q={q} />
        ))}
      </div>
    </div>
  )
}

export default Home
