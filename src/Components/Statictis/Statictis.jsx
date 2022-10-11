import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const Statictis = () => {
  const totalQuiz = useLoaderData()
  return (
    <div className="flex flex-col justify-center items-center h-screen my-5">
      <h1 className="text-3xl font-medium">Statictis</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
          <Pie
            dataKey="total"
            startAngle={180}
            endAngle={0}
            data={totalQuiz.data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Statictis
