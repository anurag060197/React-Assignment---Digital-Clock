import React, { useEffect, useState } from 'react';
import "../styles/App.css"
const App = () => {
    const [time, setTime] = useState("");
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let amORpm = "AM";
    if(hr > 12){
        hr = hr - 12;
        amORpm = "PM";
    }
    const updateTime = ()=>{
        sec = Number(sec) + 1;
        if(sec === 60){
            sec = 0;
            min = Number(min) + 1;
            if(min === 60){
                min = 0;
                hr = Number(hr) + 1;
                if(hr === 12 && amORpm === "PM"){
                    hr = 0;
                    amORpm = "AM";
                }
                else if(hr === 12 && amORpm === "AM"){
                    amORpm = "PM";
                }
                if(hr > 12 && amORpm === "PM")
                    hr = hr - 12;
            }
        }
        if(min < 10)
            min = '0' + Number(min);
        if(sec < 10)
            sec = '0' + Number(sec);
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