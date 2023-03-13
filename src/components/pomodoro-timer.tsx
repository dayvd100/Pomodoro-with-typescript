import  { useEffect, useState } from "react";
import { useInterval } from "../hooks/use-interval";
import secondsTime from "../utils/seconds-to-time";
import { Button } from "./button";
import { Timer } from "./time";

interface Props {
    defaultPomodoroTime: number;
    restTime:number;
    shortTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element{
    const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);
    const [timeCounting, setTimeCounting] = useState(false);
    const [working, setWorking] = useState(false);

    useEffect(()=>{
        if(working){document.body.classList.add('working')}
    },[working])

    useInterval(() => {
        setMainTime(mainTime - 1)
    }, timeCounting ? 1000 : null);

    const configureWork = (par: boolean) =>{
        setTimeCounting(par);
        setWorking(par)
    }

    return(
        <div className="pomodoro">
            <h2>You are working</h2>
            <Timer mainTime={mainTime}/> 
            <div className="controls">
            <Button text="Work" onClick={ () => configureWork(true)}></Button>
            <Button text="testando" onClick={ () => console.log("Estou sendo clicado")}></Button>
            <Button text={timeCounting ? "pause" : "Play"}
            onClick={ () => configureWork(!timeCounting)}></Button>
            </div>
            
        </div>
    )
}