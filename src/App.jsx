import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("pink")
  const click=(color)=>{
    setColor(color)

  }
  useEffect(() => {
    document.body.style.backgroundColor=color
  }, [color])
  


  return (
    <>
      <div className="container m-5 p-5 ms-auto  w-100 align-items-center justify-content-between" >
        <button  onClick={()=>{
          click("yellow")
        }} className='btn btn-warning m-5 w-50  p-3  text-dark'>Yellow</button>
        <button id='btn' onClick={()=>{
          click("Green")
        }} className='btn m-5 w-50 p-3 btn-success text-dark'>Green</button>
         <button id='btn' onClick={()=>{
          click("Red")
        }} className='btn btn-danger m-5 w-50 p-3 text-dark'>Red</button>
      </div>
    </>
  )
}

export default App
