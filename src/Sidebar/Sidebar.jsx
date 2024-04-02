import "./Sidebar.css"
import projectLogo from './sidebarImage/logo.png';

export default function Sidebar() {
    return (
      <div className="sidebarContainer">
         <div className="company-div">
            <div>
              <img src={projectLogo} alt="" />
            </div>

            <div className="company-div-text">
              <h1>Company Name</h1>
              <p>OurStoryz Professional</p>
            </div>

         </div>
      </div>
    )
  }
  