import { NavLink } from "react-router-dom"
import "./navbar.css"
import debug from '../assets/navbar/debug.png';
import EN from '../assets/navbar/EN.png';
import Icon from '../assets/navbar/Icon.png';
import Vector from '../assets/navbar/Vector.png';



const menuItems = [ 
    {
      name: 'Dashboard',
      to: '/',
    },
    {
      name: 'Details',
      to: 'details',
    },
    {
      name: 'Invite',
      to: 'invite',
    },
    {
      name: 'Plan',
      to: 'plan',
    },
    {
      name: 'Guest pool',
      to: 'guest pool',
    },
    {
      name: 'Files',
      to: 'files',
 },
  
    
    
  ];




  export default function Navbar() {

    return (
<>
  <div className="nav-div">
      
        <div className="nav-head">
          <h1>Company Name</h1>

          <div className="icon-div">
            
              <div>
              <img className="debug" src={debug} alt="" />
              </div>
              <div className="inside-icon-div">
                <img className="Icon" src={Icon} alt="" />
                    <div className="inside-icon-div-two">
                        <img className="EN" src={EN} alt="" />
                        <img className="Vector" src={Vector} alt="" />
                    </div>
              </div>
          </div>   
        
      </div>
      <div className="hr-line">
          <hr />
      </div> 

      <br />


    <div className="nav-ul">
      <ul className="lines">
        {menuItems.map((item) => (
          <li key={item.name}>
            {/* <NavLink className="" to={item.to}> {item.name}</NavLink>   */}
            <NavLink className={(e) => {return e.isActive ? "button-color":""}} to={item.to}> {item.name}</NavLink>
            
          </li>
        ))}
      </ul>
    </div>
  </div>

</>
    )
  }