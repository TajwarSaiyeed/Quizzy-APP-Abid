import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { LineChart } from 'recharts'

const Statictis = () => {
  const totalQuiz = useLoaderData()
  return (
    <div>
      <LineChart width={'100%'} height={'400px'}></LineChart>
    </div>
  )
}

export default Statictis
