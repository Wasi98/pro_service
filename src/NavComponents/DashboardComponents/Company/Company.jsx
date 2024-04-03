import "./Company.css"
import Vector from '../../../assets/Company/Vector.png';
import Icon from '../../../assets/Company/icon.png';
import Cover from '../../../assets/Company/cover image.png';
import EventPlanner from '../../../assets/Company/event-planner.png';






export default function Company() {
  return (
    <div className="company-container">
      
      <div className="first-div">
           <div>
           <img src={Vector} alt="" />
           </div>
           <div>
            <img src={Icon} alt="" />
           </div>
            <h1>Company</h1>
      </div>

      < hr className="hLine" />

      <div className="CoverImage">
        <img src={Cover} alt="" />
      </div>

      <div className="second-div">
        <img className="EventPlanner" src={EventPlanner} alt="" />
        <h2 className="OrgName">Organization Name Goes Here</h2>
        <button className="Company-Details-button">Company Details</button>
      </div>


    </div>
  )
}
