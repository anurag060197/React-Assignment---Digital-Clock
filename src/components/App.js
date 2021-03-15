import React, {Component}from 'react';
import "../styles/App.css";


class App extends Component {
    constructor() {
      super();
      this.state = {
        time: new Date().toLocaleTimeString(),
      }
      this.dateFunction = this.dateFunction.bind(this);
    }
  
    dateFunction() {
      let date = new Date();
      let updateHour = date.getHours();
      let updateMinute = date.getMinutes();
      let updateSecond = date.getSeconds();
      let updateAMPM = updateHour < 12 ? 'AM' : 'PM';
      updateHour=updateHour>12 ? updateHour-12: updateHour;
      if(updateMinute < 10) updateMinute = `0${updateMinute}`;
      if(updateSecond < 10) updateSecond = `0${updateSecond}`;
      let updateTime = `${updateHour}:${updateMinute}:${updateSecond} ${updateAMPM}`;
      this.setState({time: updateTime});
    }
  
    componentDidMount() {
      this.loadInterval = setInterval(this.dateFunction, 1000)
    }
  
    componentWillUnmount() {
      clearInterval(this.loadInterval);
    }
  
    render() {
      return(
        <>
          <div className="Clock">
            <h3 id="time">{this.state.time}</h3>
          </div>
        </>
      )
    }
  }
  export default App;


// let date = new Date();

// const App = () => {
//     const [hr, setHr] = useState(date.getHours());
//     const [min, setMin] = useState(date.getMinutes());
//     const [sec, setSec] = useState(date.getSeconds());
//     const [amOrPm, setAmOrPm] = useState("AM");
//     const [time, setTime] = useState(hr+":"+min+":"+sec+" "+amOrPm);

//     const renderTime = ()=>{
//         if(time === "")
//             setTime(hr+":"+min+":"+sec+" "+amOrPm);
//         return time;
//     }
//     // use initial value of time is new Date().toLocaleTimeString()
//     const updateTime = ()=>{
//         console.log("helloooo");
//         setSec((prev)=>(prev+1));
//         if(sec === 59){
//             setSec((prev)=>0);
//             setMin((prev)=>prev+1);
//         }
//         setTime(hr+":"+min+":"+sec+" "+amOrPm);
//     }

//     useEffect(()=>{
//         let clearSetInterval = setInterval(updateTime, 1000);
//         return ()=> clearInterval(clearSetInterval);
//     },[]);

//     return (
//         <div className="Clock">
//             <h3 id="time">{time}</h3>
//         </div>
//     );
// };

// export default App;


    // const [time, setTime] = useState("");
    // var date = new Date();
    // let hr = date.getHours();
    // let min = date.getMinutes();
    // let sec = date.getSeconds();
    // let amORpm = "AM";
    // if(hr > 12){
    //     hr = hr - 12;
    //     amORpm = "PM";
    // }
    // if(hr === 0 && amORpm === "AM")
    //     hr = 12;
    // const updateTime = ()=>{
    //     sec = Number(sec) + 1;
    //     if(sec === 60){
    //         sec = 0;
    //         min = Number(min) + 1;
    //         if(min === 60){
    //             min = 0;
    //             hr = Number(hr) + 1;
    //             if(hr === 12 && amORpm === "PM"){
    //                 // hr = 0;
    //                 amORpm = "AM";
    //             }
    //             else if(hr === 12 && amORpm === "AM"){
    //                 amORpm = "PM";
    //             }
    //             if(hr > 12 && amORpm === "PM")
    //                 hr = hr - 12;
    //         }
    //     }
    //     if(min < 10)
    //         min = '0' + Number(min);
    //     if(sec < 10)
    //         sec = '0' + Number(sec);
    //     setTime(hr+":"+min+":"+sec+" "+amORpm)
    // }
    // useEffect(()=>{
    //     if(min < 10)
    //         min = '0' + min;
    //     if(sec < 10)
    //         sec = '0' + sec;
    //     setTime(hr+":"+min+":"+sec+" "+amORpm);
    //     let clearSetInterval = setInterval(updateTime, 1000);
    //     return ()=>{
    //         clearInterval(clearSetInterval);
    //     };
    // }, []);