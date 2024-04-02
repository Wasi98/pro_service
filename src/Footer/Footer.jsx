// import { NavLink } from "react-router-dom";

import "./Footer.css";
import R3 from './footerImage/R3.png';
import Copyright from './footerImage/Copyright.png';


// const footerItems = [ 
//     {
//       name: 'Terms of Service',
//       to: 'terms of service',
//     },
//     {
//       name: 'Privacy',
//       to: 'privacy',
//     },
//     {
//       name: 'Cookies',
//       to: 'cookies',
//     },
// ];



export default function Footer() {
  return (
    <div className="footer-container">
       <div className="footer-divs">

            <img className="R3" src={R3} alt="" />
            {/* footer array objects */}
            
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Cookies</p>
       </div>

       <div>
        <img src={Copyright} alt="" />
       </div>
    </div>
  )
}





{/* <div className="">
<ul className="">
{footerItems.map((item) => (
 <li key={item.name}>
<NavLink className={(e) => {return e.isActive ? "footer-color":""}} to={item.to}> {item.name}</NavLink>

  </li>
))}
</ul>
</div> */}