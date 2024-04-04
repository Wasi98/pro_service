import "./Storyz.css"

import Icon from '../../../assets/Story/icon.png';
import Vector from '../../../assets/YourClients/Vector.png';
import Upper from '../../../assets/YourClients/uppersign.png';

import SearchIcon from '../../../assets/YourClients/search.png';

import story from './Story'; // Importing user object
import StoryzList from "./StoryzList";




export default function Storyz() {
  return (
    <div className="storyz-container">
            <div className="storyz-first-div">
          <div className="imagesHeader">
            <img src={Vector} alt="" />
            <img src={Icon} alt="" />
            <h1>Storyz in this account
              <p>3 Storyz</p>
            </h1>
          </div>

          <div className="imagesHeader-two">
            <h2>less</h2>
            <button><img src={Upper} alt="" /></button>
          </div>
      </div>

      < hr className="hLine" />


      <h2 className="search-header"></h2>

      <div className="search-container">
      <button type="submit" className="search-button">
          <img src={SearchIcon} alt="Search"/>
      </button>
        <input type="text" className="search-input" placeholder="US/Pa"/>     
      </div>


      <div className="ClientProfiles">
      <StoryzList story={story} /> {/* Pass user object as prop */}
      </div>

      <button className="storyz-button">New Storyz</button>
      

    </div>
  )
}




