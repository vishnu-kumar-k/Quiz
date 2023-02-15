import course from '../img/Course.png'
import '../stylesheet/Card.scss'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import {MdQuestionAnswer} from "react-icons/md";
import {IoCheckmarkCircle} from "react-icons/io5"
import moment from 'moment/moment';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { useRecoilState } from 'recoil';
import { questionState, responceState, testState } from '../atom/question';
// import Bg from '../img/Course.png'
function toDate(timeStamp_value){
    
return moment(timeStamp_value).utc().format('YYYY-MM-DD');
}
function Card({contest})
{

    // const[jwt,setJwt]=useRecoilState(jwtTokenState)
  const [question,setQuestion]=useRecoilState(questionState)
    const[test,setTest]=useRecoilState(testState)
    const navigate = useNavigate();

    const handleSubmit=(e)=>{

        e.preventDefault();
        // console.log("ikada chudu"+jwt)

    axios
      .get(`/get-test?testId=${contest.id}`, 
      {
        headers:{
            "Content-Type":'application/json',
            'Authorization':'Bearer '+localStorage.getItem('jwt')
        }
      })
      .then(function (response) {
        
        setQuestion(response.data.data)
        setTest({name:contest.name,id:contest.id})

        
        navigate("../test");
        
      })
      .catch(function (error) {
        console.log(error);
        NotificationManager.error(error.data.msg, "Error", 3000);
      });
    }

    
    // console.log("vandhuten"+JSON.stringify(contest))
    return(<>
    <div className="card-container">
        <img src={course} />
        {/* <Bg/> */}
        <br />
        <div className="card-container-inside">
        <h1> {contest.name}</h1>
        <br />
        <div className="time-container">
        <p><MdQuestionAnswer  /> Total Questions:10</p>
        <p><IoCheckmarkCircle style={{fontSize:'16px' ,marginTop:'1px' ,verticalAlign:'center'}} /> Total marks:50</p>
        <p><BsFillCalendarCheckFill /> Start: {toDate(contest.startTime)}</p>
    
        <p><BsFillCalendarCheckFill /> End:{toDate(contest.endTime)}</p>
        </div>
        <div className="time-container">
        <p><BsClockFill /> Test Duration:1 hour</p>
        
        <div className="related-topics-container">
        {
            // console.log(JSON.stringify(contest.relatedTopics))
            contest.relatedTopics.split(",").map((topic)=>{
                return(<p>{topic}</p>)
            })
        }
        </div>
        </div>
        <br />
        <button onClick={(e)=>handleSubmit(e)}>Register</button>
        </div>
        
    </div>

    </>);
}
export default Card;