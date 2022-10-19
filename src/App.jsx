import {useState, useRef,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [onTutorial, setOnTutorial] = useState(false)
  const [tutorialIndex,setTutorialIndex] = useState(0);
  const tutorialContainer = useRef(null);

  useEffect(() => {
  })

  const handleTutorial = () => {
    setOnTutorial(true)
  }

  const handleDirection = (e) => {
    const tutorialNodes = tutorialContainer.current.childNodes

    switch (e.target.ariaLabel){
      case 'prev':
        if(tutorialIndex === 0){
          break
        }
        setTutorialIndex(tutorialIndex-1)
        break

      case 'next':
        if(tutorialIndex === tutorialNodes.length-1) {
          setTutorialIndex(0)
          break
        }
        setTutorialIndex(tutorialIndex+1)
        break
    }
  }


  return (
    <div className="App">
      <div className={'box'}>
        <button onClick={handleTutorial}>Tutorial</button>
        {onTutorial && <div className={'overlay'}></div>}
        <button aria-label = {"prev"} className={"navigation__button prev"} onClick={handleDirection}>Prev</button>
        <button aria-label = {"next"} className={"navigation__button next"} onClick={handleDirection}>Next</button>
        <button className={"navigation__button close"} onClick={() => {
          setOnTutorial(false)
        }}>Close
        </button>
        {/*<span>yellow</span>*/}
        <div className={"contents"} ref = {tutorialContainer}>
          <div className={`tutorial tutorial-1 ${tutorialIndex+1 === 1 ? 'show':'' }`}>
            <div className={"tutorial__header"}>
              <span>튜토리얼1</span>
            </div>
            <div>튜토리얼 1의 내용입니다</div>
            {onTutorial && <div className={`tutorial__guide guide1 ${tutorialIndex+1 === 1 ? 'visible':'' }`}>가이드 입니다</div>}
          </div>


          <div className={`tutorial tutorial-2 ${tutorialIndex+1 === 2 ? 'show':'' }`}>
            <div className={"tutorial__header"}>
              <span>튜토리얼2</span>
            </div>
            <div>튜토리얼 2의 내용입니다</div>
            {onTutorial && <div className={`tutorial__guide guide1 ${tutorialIndex+1 === 2 ? 'visible':'' }`}>가이드 입니다</div>}
          </div>
          <div className={`tutorial tutorial-3 ${tutorialIndex+1 === 3 ? 'show':'' }`}>
            <div className={"tutorial__header"}>
              <span>튜토리얼3</span>
            </div>
            <div>튜토리얼 3의 내용입니다</div>
            {onTutorial && <div className={`tutorial__guide guide1 ${tutorialIndex+1 === 3 ? 'visible':'' }`}>가이드 입니다</div>}
          </div>


        </div>
      </div>
    </div>
  )
}

export default App
