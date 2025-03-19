import React from 'react'
import robotpicture from '../../assets/robot-picture.png'

const Right = ({ className }) => {
  return (
    <div className = {`${className} h-screen flex flex-col items-center justify-center gap-5`}>
        <h2>Please log in or sign up to get access to the course.</h2>
        <div className = "buttons flex gap-4">
            <button className="border-purple-500 border-2 px-10 py-1 rounded xs">Log in</button>
            <button className="bg-purple-500 px-10 py-1 rounded xs text-white">Sign up</button>
        </div>
        <img className="absolute bottom-10 w-64" src={robotpicture} />
    </div>
  )
}

export default Right