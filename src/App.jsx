import {useState, useRef,useEffect} from 'react'
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs';

import './App.scss'

function App() {
  const toggleMode = () => {
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.classList.toggle("dark")
  }

  const toggleHandler = (e) => {
    console.log(e.target.checked)
    toggleMode()
  }
  return (
    <div className="App">
      <label className={"toggle"} for={"modeToggle"} >
        <input className={"toggle__input"} type={"checkbox"} id ="modeToggle" onClick={toggleHandler} ></input>
        <div className="toggle__fill">
          <span className={"left__toggle"}>
            <BsFillSunFill style={{width:'50%',height:'50%', fill:'yellow'}}></BsFillSunFill>
          </span>

          <span className={"right__toggle"}>
            <BsFillMoonFill style={{width:'50%',height:'50%', fill:'yellow'}}></BsFillMoonFill>
          </span>
        </div>
      </label>

    </div>
  )
}

export default App

