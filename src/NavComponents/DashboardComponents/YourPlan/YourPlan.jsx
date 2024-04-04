import "./YourPlan.css"
import Icon from '../../../assets/YourPlan/icon.png';
import Vect from '../../../assets/YourPlan/Vect.png';
import Vector from '../../../assets/YourPlan/Vector.png';
import PlanCard from '../../../assets/YourPlan/payment plan card.png';
import Triangle from '../../../assets/YourPlan/triangle.png';
import Rocket from '../../../assets/YourPlan/rocket.png';



export default function YourPlan() {
  return (
    <div className="yourPlan-container">
      <div className="yourPlan-first-div">
          <div className="imagesAndHeader">
            <img src={Vector} alt="" />
            <img src={Icon} alt="" />
            <h1>Your Plan
              <p>3 Storyz</p>
            </h1>
          </div>

          <div className="imagesAndHeader-two">
            <h2>less</h2>
            <button><img src={Vect} alt="" /></button>
          </div>
      </div>

      < hr className="hLine" />

      <h2 className="header-After-hLine">
      You are currently using the Professional plan, which supports multiple Storyz, events, and teams.
      </h2>

      <div className="yourPlan-second-div">

           <div className="PlanCard">
            <img src={PlanCard} alt="" />
              <div className="Triangle">
                <img src={Triangle} alt="" />
            </div>

                <div className="PlanCard-header">
                  <h1 className="PlanCard-header-one">Current Plan</h1>
                  <h2 className="PlanCard-header-two">Professional</h2>
                  <h1 className="PlanCard-header-three">$25/Mo.</h1>
                  <p className="PlanCard-header-four">Manage multiple clients and teams</p>
                </div>
           </div>


           <div>
            <button className="Manage">Manage your current plan</button>
            <button className="Addons"><img src={Rocket} alt="" />Addons & Upgrades</button>
           </div>
      </div>


    </div>
  )
}
