import React from 'react'
import GreetingCard from '../components/GreetingCard'

const Home = () => {
  return (
    <div className='space-y-4'>
      <h1>This is my home page</h1>
      <GreetingCard name={"ULTIMATE"} />
    </div>
  )
}

export default Home