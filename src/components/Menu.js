import "../stylesheet/Menu.scss";
import profileImg from "../img/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { profileState } from "../atom/auth";
import { useEffect } from "react";
import axios from "../api/axios";
// var user = 1;


// Function to check whether the user has login or not

// function user_inactive() {
//   return (<div className="dropdown">
//     <div className="dropbtn">
//       <img src={profile} alt="" />
//     </div>
//     <div className="dropdown-content">
//       <Link className="text-link" to="/auth">Login</Link>
//     </div>
//   </div>);
// }




//Main Function
function Menu() {
  const [profile, setProfile] = useRecoilState(profileState)
  const navigate=useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/get-user-profile',
          {
            headers: {
              "Content-Type": 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
          }
        );
        setProfile(response.data.data);

      } catch (err) {
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchProfile()
  }, [])
  return (
    <div className="con">
      <div className="container">
        <div className="menu">
          <div className="image">
            <h1>DODOK</h1>{" "}
          </div>

          <div className="dropdown">
            <div className="dropbtn">
              <img src={profileImg} alt="" />
            </div>
            <div className="dropdown-content">
              <p>Hey,<span>{profile.name}</span></p>
              <Link className="text-link" to="/profile">Profile</Link>
              <Link className="text-link" to="../home">Dashboard</Link>
              <button className="text-link"
              onClick={() => {
                localStorage.setItem('jwt', '')
                navigate('../')
              }}
              >LogOut
              </button>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Menu;
