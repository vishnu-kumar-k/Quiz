import "../stylesheet/Menu.scss";
import profile from "../img/login.png";
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
    <p className="link">Hey,<span>Vishnu</span></p>
    <p className="link">Profile</p>
    <p className="link">Dashboard</p>
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
      <p>Login</p>
    </div>
  </div>);
}




//Main Function
function Menu() {
  return (
    <>
      <div className="container">
        <div className="menu">
          <div className="image">
            <h1>DODOK</h1>{" "}
          </div>
          {check()}
        </div>
      </div>
    </>
  );
}

export default Menu;
