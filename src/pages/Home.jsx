import React from 'react'
import MainLayout from '../layouts/MainLayout'
import MyButton from '../MyButton'

const Home = () => {

  return (
  
    <MainLayout>
       <div className="mt-4 p-5 bg-warning text-black rounded">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum...</p>
      </div>
      <MyButton text="A" color="primary"/>
      <MyButton text="B" color="info"/>
      <MyButton text="C" color="warning"/>
    </MainLayout>
    
    
  )
}

export default Home