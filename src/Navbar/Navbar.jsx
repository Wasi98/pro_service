import { NavLink } from "react-router-dom"
import "./navbar.css"



const menuItems = [ 
    {
      name: 'Dashboard',
      to: '/',
    },
    {
      name: 'Details',
      to: 'details',
    },
  ];




  export default function Navbar() {

    return (
<>
  <div className="nav-div">
  <div className="nav-container"> 
    <div className="nav-ul">
      <ul className="lines">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink className="bg-green" to={item.to}> {item.name}</NavLink>  
          </li>
        ))}
      </ul>
    </div>
  </div>
  </div>
</>
    )
  }