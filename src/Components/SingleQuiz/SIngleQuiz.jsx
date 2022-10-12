import React, { useContext } from 'react'
import { worngRightCounter } from '../Quizes/Quizes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiFillEye } from 'react-icons/ai'

const SIngleQuiz = ({ question, num }) => {
  const { options, correctAnswer } = question
  const [wrong, setWrong, correct, setCorrect] = useContext(worngRightCounter)

  const handleSelect = (e) => {
    if (e !== correctAnswer) {
      toast("Oop's wrong answer, Try Again")
      setWrong(wrong + 1)
    } else {
      toast('Correct')
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="px-4 py-5 sm:px-5 md:px-10 bg-slate-200 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-2xl text-left flex-1">
          Quiz {num + 1}
          {' : '}
          {question.question.slice(3, question.question.length - 4)}
        </h1>
        <div className="w-10 h-10 cursor-pointer flex-1">
          <AiFillEye />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 my-2">
        {options.map((option, idx) => (
          <label
            key={idx}
            className=" cursor-pointer text-xl bg-gradient-to-r font-medium p-3 rounded-md text-left h-full w-full flex gap-5 items-center from-cyan-600 to-teal-300"
          >
            <input
              onChange={(e) => handleSelect(e.target.value)}
              type="radio"
              name="q"
              value={option}
            />
            <span> {option}</span>
          </label>
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default SIngleQuiz
