import { NavLink } from "react-router-dom"
import "./navbar.css"



const menuItems = [ 
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Contact',
      to: '/contact',
    },
  ];




  export default function Navbar() {

    return (
<>
  <div className="nav-container"> {/* Apply bg-green-500 class here */}
    <div className="nav-ul">
      <ul className="lines">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink className="bg-green" to={item.to}> {item.name}</NavLink>  
            {/* You can remove the bg-green class */}
          </li>
        ))}
      </ul>
    </div>
  </div>
</>
    )
  }