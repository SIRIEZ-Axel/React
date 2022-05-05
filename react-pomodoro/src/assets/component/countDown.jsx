import { useState, useEffect } from "react"
import '../style/countDown.css'

export function Countdown() {

    const [seconds, secondsUpdate] = useState(0)
    const [isActive, isActiveUpdate] = useState(false)

    function Reset() {
        secondsUpdate(0)
        isActiveUpdate(false)
    }

    function Toggle() {
        isActiveUpdate(!isActive);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                secondsUpdate(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div className="time">
                {seconds}
            </div>
            <div className="row">
                <button className={`button btn-start btn-start-${isActive ? 'active' : 'inactive'}`} onClick={Toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button btn-reset" onClick={Reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}
