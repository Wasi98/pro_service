import "./YourClients.css"
import Icon from '../../../assets/YourClients/icon.png';
import Vector from '../../../assets/YourClients/Vector.png';
import Upper from '../../../assets/YourClients/uppersign.png';
import Common from '../../../assets/YourClients/common icons.png';
import SearchIcon from '../../../assets/YourClients/search.png';


import ProfileList from './ProfileList'; // Importing ProfileList component
import users from './User'; // Importing user object







export default function YourClients() {
  return (
    <div className="yourClients-container">
            <div className="yourClients-first-div">
          <div className="imagesHeader">
            <img src={Vector} alt="" />
            <img src={Icon} alt="" />
            <h1>Your Clients
              <p>3 Clients</p>
            </h1>
          </div>

          <div className="imagesHeader-two">
            <h2>less</h2>
            <button><img src={Upper} alt="" /></button>
          </div>
      </div>

      < hr className="hLine" />

      <h2 className="header-After-hLine">
      Select an Client, broadcast messages, or invite a new client.
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
      <ProfileList user={users} /> {/* Pass user object as prop */}
      </div>

      <button className="Invite-button">Invite client</button>
      

    </div>
  )
}
