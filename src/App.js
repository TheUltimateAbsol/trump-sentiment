import logo from './logo.svg';
import './App.css';
import StolenPage from './StolenPage.js'
import data from './data.json'
import { useEffect, useState } from 'react';
import SimplexNoise from 'simplex-noise';

function getBackground() {
  let hour = (new Date).getHours();

  if (hour > 5 && hour <= 13)
    return "morning";
  else if (hour > 13 && hour <= 17)
    return "afternoon";
  else if (hour > 17 && hour < 20)
    return "evening"
  else
    return "night"
}

function injectBackground(){
  console.log("hi");
  document.body.className = getBackground();
}

function App() {
  const [commIndex, setCommIndex] = useState(0);
  const [commentStage, setCommentStage] = useState(0);
  const stages = ['featured right', 'featured', 'featured left']


  useEffect(() => {
    let curIndex = commIndex;
    let stage = commentStage;
    const stageTimes = [500, 3000, 500];
    const loop = setTimeout(() => {
      const count = data.featured && !!data.featured ? data.featured.length : 0;
      if (stage === 0)
      {
      curIndex = (1+curIndex)%count;
      setCommIndex(curIndex)
      }
      console.log("this should be current comment", data.featured[curIndex])

      stage = (stage + 1)%3;
      setCommentStage(stage);
      console.log("this should be comment stage", stages[stage], stage)

    }, stageTimes[stage])
    return () => clearTimeout(loop);
  })

  return (
    
    <div className={`App`}>
      {
        injectBackground()
      }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <StolenPage
        percent={data.sentiment}
        commentStage={stages[commentStage]}
        currentComment={data.featured && !!data.featured.length ? data.featured[commIndex] : null} />
    </div>
  );
}

export default App;
