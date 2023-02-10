import course from '../img/Course.png'
import '../stylesheet/Card.scss'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import {MdQuestionAnswer} from "react-icons/md";
import {IoCheckmarkCircle} from "react-icons/io5"
import { useEffect } from 'react';
function toDate(timeStamp_value){
    var theDate = new Date(timeStamp_value * 1000);
    let dateString = theDate.toGMTString();
return dateString;
}
function Card(contest={})
{


    
    console.log("vandhuten"+JSON.stringify(contest))
    return(<>
    <div className="card-container">
        <img src={contest.contest.avatar} />
        <br />
        <div className="card-container-inside">
        <h1> {contest.contest.name}</h1>
        <br />
        <div className="time-container">
        <p><MdQuestionAnswer  /> Total Questions:10</p>
        <p><IoCheckmarkCircle style={{fontSize:'16px' ,marginTop:'1px' ,verticalAlign:'center'}} /> Total marks:50</p>
        <p><BsFillCalendarCheckFill /> Start: {toDate(contest.contest.startTime)}</p>
    
        <p><BsFillCalendarCheckFill /> End:{toDate(contest.contest.endTime)}</p>
        </div>
        <div className="time-container">
        <p><BsClockFill /> Test Duration:1 hour</p>
        
        <div className="related-topics-container">
        <p>Average</p>
        <p>Math</p> 
        <p> Speed</p>
        </div>
        </div>
        <br />
        <button>Register</button>
        </div>
        
    </div>

    </>);
}
export default Card;