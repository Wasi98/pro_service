import "./YourTeam.css"

import Icon from '../../../assets/YourClients/icon.png';
import Vector from '../../../assets/YourClients/Vector.png';
import Upper from '../../../assets/YourClients/uppersign.png';
import Common from '../../../assets/YourClients/common icons.png';
import SearchIcon from '../../../assets/YourClients/search.png';


import admin from './Admin'; // Importing user object
import AdminList from "./AdminList";




export default function YourTeam() {
  return (
    <div className="yourTeam-container">
      
            <div className="yourClients-first-div">
          <div className="imagesHeader">
            <img src={Vector} alt="" />
            <img src={Icon} alt="" />
            <h1>Your Team
              <p>5 Members</p>
            </h1>
          </div>

          <div className="imagesHeader-two">
            <h2>less</h2>
            <button><img src={Upper} alt="" /></button>
          </div>
      </div>

      < hr className="hLine" />

      <h2 className="header-After-hLine">
      Select an Admin account, broadcast a message, or invite new team members.
      </h2>

      <div className="broadcast">
        <img src={Common} alt="" />
        <h2 className="broadcast-header">
          Broadcast message
        </h2>
      </div>

      <h2 className="search-header">Search:</h2>

      <div className="search-container">
      <button type="submit" className="search-button">
          <img src={SearchIcon} alt="Search"/>
      </button>
        <input type="text" className="search-input" placeholder="US/Pa"/>     
      </div>


      <div className="ClientProfiles">
      <AdminList admin={admin} /> {/* Pass user object as prop */}
      </div>

      <button className="Invite-team-button">Invite team member</button>
      

    </div>
  )
}
