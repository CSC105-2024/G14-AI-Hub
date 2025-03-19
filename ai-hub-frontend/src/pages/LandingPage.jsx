import React from 'react'
import Left from '../components/landing-page/Left'
import Right from '../components/landing-page/Right'

const LandingPage = () => {
  return (
    <>
    <div className="flex h-screen">
    <Left className="flex-1"/>
    <Right className="flex-2" />
    </div>
    </>
  )
}

export default LandingPage