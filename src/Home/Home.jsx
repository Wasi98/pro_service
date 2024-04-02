
import NavRoute from '../Navbar/NavRoute'
import "./Home.css";
import Company from './HomeComponents/Company';
import Storyz from './HomeComponents/Storyz';
import Workspace from './HomeComponents/Workspace';
import YourClients from './HomeComponents/YourClients';
import YourPlan from './HomeComponents/YourPlan';
import YourTeam from './HomeComponents/YourTeam';



export default function Home(){
  return(
  <>
       <div>
        <div>
        <NavRoute />
        </div>
        <div className="card-container">
          <div className="card card1"> <Company /> </div>
          <div className="card card2"> <YourPlan /> </div>
          <div className="card card3"> <YourClients /> </div>
          <div className="card card4"> <Workspace /> </div>
          <div className="card card5"> <YourTeam /> </div>
          <div className="card card6"> <Storyz /> </div>
        </div>
        
    </div>

  </>
  )
}




