import {useState, useRef,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const toggleMode = () => {
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.classList.toggle("dark")

  }
  return (
    <div className="App">
      <button onClick={toggleMode}>토글</button>
    </div>
  )
}

export default App

