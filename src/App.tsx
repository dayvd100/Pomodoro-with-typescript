import React from "react";
import {PomodoroTimer} from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
     <PomodoroTimer 
     defaultPomodoroTime={1500}
     shortTime={1000}
     restTime={2000}
     cycles={4}/>
    
    </div>
  );
}

export default App;
