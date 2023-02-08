import icon from '../img/icon.jpg'
import '../stylesheet/Menu.scss'
import profile from "../img/login.png"
function Menu()
{
    return (<>
    <div className="container">
        <div className="menu">
            <div className="image"><h1>DODODOK</h1> </div>
            <div className="profile"><img src={profile} /></div>
        </div>
    </div>
    </>);
}

export default Menu;