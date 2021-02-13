import React, { useEffect, useState } from 'react';
import "../styles/App.css"
const App = () => {
    const [time, setTime] = useState("");
    var d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let amORpm = "AM";
    if(hr > 12){
        hr = hr - 12;
        amORpm = "PM";
    }
    const updateTime = ()=>{
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min == 60){
                min = 0;
                hr++;
            }
        }
        if(min < 10)
            min = '0' + min;
        if(sec < 10)
            sec = '0' + sec;
        setTime(hr+":"+min+":"+sec+" "+amORpm)
    }
    useEffect(()=>{
        if(min < 10)
            min = '0' + min;
        if(sec < 10)
            sec = '0' + sec;
        setTime(hr+":"+min+":"+sec+" "+amORpm);
        let clearSetInterval = setInterval(updateTime, 1000);
        return ()=>{
            clearInterval(clearSetInterval);
        };
    }, []);
    return (
        <div className="Clock">
            <h3 id="time">{time}</h3>
        </div>
    );
};

export default App;