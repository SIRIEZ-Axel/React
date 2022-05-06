import React, { useState } from 'react';
import './App.css';
import Displaycomponent from './components/displayComponent';
import Btncomponent from './components/BtnComponent';

function App() {
  const [time, setTime] = useState({ms:99, s:0, m:25, h:0});
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  }

  var updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const run = () => {
    if(updateM === 60){
      updateH --
      updateM = 0
    }
    if(updateS === 60){
      updateM --
      updateS = 0
    }
    if(updateMs === 100){
      updateS --
      updateMs = 0
    }
    updateMs ++
    return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH});
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(2);
    setTime({ms:100, s:0, m:25, h:0})
  }

  const resume = () => (start)

  return (
    <main>
      <div className='clock-holder'>
        <div className='stopwatch'>
          <Displaycomponent time={time} />
          <Btncomponent status={status} stop={stop} reset={reset} resume={resume} start={start}/>
        </div>
      </div>
    </main>
  )
}


export default App;
