import React , {useState , useEffect} from "react";

function DigitalClock(){
    
    const[time , setTime] = useState(new Date());       // useState(new Date()) initializes time with the current date and time when the component first renders. 
                                                        // This ensures that time starts with the current time.

    useEffect(() => {                                   // This hook will run once after the first render
        const intervalId = setInterval(() => {          // This updates the time state with the current date and time, effectively triggering a re-render of the component every second.
            setTime(new Date());
        },1000);

        return() => {                                   // It is used for cleanup , it clears the interval when the component unmounts or before the effect runs again. 
            clearInterval(intervalId);                  // Clearing helps in preventing memory leaks and unnecessary computations.
        }
    },[])

    function padZero(number){                           // If no is less than 10 , it'll concatenate 0 with the no.
        return (number < 10 ? "0" : "") + number;       // Eg : if no is 5 , then it would return 05 
    }

    function formatTime(){
        let hours = time.getHours();                    // Using 'let' because , hours will be reassigned
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";     // Deciding whether time is AM or PM
        hours = hours % 12 || 12;                       // Reassigning hours in a 12-hour format , eg : if hours = 13 , then 13 % 12 will give 1 , after padding it will give 01.

        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}  ${meridiem}`
    }
        
    
    return(
        <>
            <header>DIGITAL CLOCK</header>
            <div className="digital-clock-container">
                {formatTime()}
            </div>

        </>
    );
}

export default DigitalClock;