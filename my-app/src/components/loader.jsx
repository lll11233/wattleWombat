import { useState } from 'react'
import './test.css'

const userName = localStorage.getItem('userName') || 'Guest'
const userNameInput = localStorage.getItem('userNameInput') || 'Guest'

export default function LoaderScreen({ onLoad }) {

  return (
    <>
      <h1 className='title'>Loader Page</h1>
      <div className="userIdentification">
        <p>
          Welcome back {userName}
        </p>
      </div>
        <button className="button" 
          onClick={onLoad}>
            Press Butto to Continue
        </button>
        
    </>
    
  )
}

