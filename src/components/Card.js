import course from '../img/Course.png'
import '../stylesheet/Card.scss'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import {MdQuestionAnswer} from "react-icons/md";
import {IoCheckmarkCircle} from "react-icons/io5"
function Card()
{
    return(<>
    <div className="card-container">
        <img src={course} />
        <br />
        <div className="card-container-inside">
        <h1> Course Name</h1>
        <br />
        <div className="time-container">
        <p><MdQuestionAnswer  /> Total Questions:10</p>
        <p><IoCheckmarkCircle style={{fontSize:'16px' ,marginTop:'1px' ,verticalAlign:'center'}} /> Total marks:50</p>
        <p><BsFillCalendarCheckFill /> Start: 09/09/2002,10.00Am</p>
    
        <p><BsFillCalendarCheckFill /> End: 08/10/2022,12.00Pm</p>
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