import React from 'react'

const Left = ({ className }) => {
  return (
    <div className = {`${className} flex flex-col justify-center p-4 bg-purple-500 h-screen text-white items-center text-center`}>
        <div className="heading-container absolute top-3 left-3 mt-5 ml-5">
            <h1 className = "heading text-2xl font-bold">Welcome to AI Hub!</h1>
            <div className = "bg-white w-1/2 h-[0.2rem] mt-1"></div>
        </div>
            <p>AI Hub is an e-learning website designed to provide users with accessible learning experiences. This website will offer courses that are based on the basic concepts of AI.</p>
    </div> 
  )
}

export default Left