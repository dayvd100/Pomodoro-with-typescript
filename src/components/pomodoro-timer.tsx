import  { useState } from "react";
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

    useInterval(() => {
        setMainTime(mainTime - 1)
    }, 1000)

    return(
        <div className="pomodoro">
            <h2>You are working</h2>
            <Timer mainTime={mainTime}/> 
            <div className="controls">
            <Button text="testando" onClick={ () => console.log("Estou sendo clicado")}></Button>
            <Button text="testando" onClick={ () => console.log("Estou sendo clicado")}></Button>
            <Button text="testando" onClick={ () => console.log("Estou sendo clicado")}></Button>
            </div>
            
        </div>
    )
}