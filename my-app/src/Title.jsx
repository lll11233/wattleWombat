import { useState } from 'react'

import './test.css'

const userName = localStorage.getItem('userName') || 'Guest'
const userNameInput = localStorage.getItem('userNameInput') || 'Guest'
function titleScreen() {

  return (
    <>
      <h1 className='title'>Wattle the Wombat</h1>
      <div className="userIdentification">
        <p>
          Welcome back {userName}
        </p>
      </div>
        <button className="button" onClick={() => continueLoading()}>
            Press Button to Continue
        </button>
    </>
  )
}

export default titleScreen