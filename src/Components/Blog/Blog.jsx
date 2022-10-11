import React from 'react'

const Blog = () => {
  return (
    <div className="grid grid-cols-1 mx-3 my-5 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-screen align-middle justify-items-center">
      <div className="bg-teal-400 px-3 py-4 rounded-lg text-justify">
        <h2 className="text-2xl my-2">Purpose Of React Router</h2>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>
      <div className="bg-teal-400 px-3 py-4 rounded-lg text-justify">
        <h2 className="text-2xl my-2">How does context API works?</h2>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on.
        </p>
      </div>
      <div className="bg-teal-400 px-3 py-4 rounded-lg text-justify">
        <h2 className="text-2xl my-2">Why use UseRef Hook</h2>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  )
}

export default Blog
