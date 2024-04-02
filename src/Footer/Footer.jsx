import { NavLink } from "react-router-dom";
import "./Footer.css";
import R3 from './footerImage/R3.png';



// const footerItems = [ 
//     {
//       name: 'Terms of Service',
//       to: '/',
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
            <div>
                <img src={R3} alt="" />

            </div>

            <div>
                  {/* array objects */}

          

            </div>

       </div>
    </div>
  )
}
