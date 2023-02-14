import "../stylesheet/Menu.scss";
import profile from "../img/login.png";
import { Link } from "react-router-dom";
var user = 1;


// Function to check whether the user has login or not
function check() {
  
  if (user) {
    return <>{user_active()}</>;
  } else {
    return <>{user_inactive()}</>;
  }
}

function user_active() {
  return(<div className="dropdown">
  <div className="dropbtn">
    <img src={profile} alt=""/>
  </div>
  <div className="dropdown-content">
    <p>Hey,<span>Vishnu</span></p>
    <Link className="text-link" to="/profile">Profile</Link>
    <Link className="text-link" to="/">Dashboard</Link>
    <p style={{color:"red"}} className="link">Logout</p>
  </div>
</div>);
}

function user_inactive()
{
    return(<div className="dropdown">
    <div className="dropbtn">
      <img src={profile} alt="" />
    </div>
    <div className="dropdown-content">
      <Link className="text-link" to="/auth">Login</Link>
    </div>
  </div>);
}




//Main Function
function Menu() {
  return (
    <div className="con">
      <div className="container">
        <div className="menu">
          <div className="image">
            <h1>DODOK</h1>{" "}
          </div>
          {check()}
        </div>
      </div>
    </div>
  );
}

export default Menu;
