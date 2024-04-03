import "./Dashboard.css";
import Company from "./DashboardComponents/Company/Company";
import Storyz from "./DashboardComponents/Storyz/Storyz";
import Workspace from "./DashboardComponents/Workspace/Workspace";
import YourClients from "./DashboardComponents/YourClients/YourClients";
import YourPlan from "./DashboardComponents/YourPlan/YourPlan";
import YourTeam from "./DashboardComponents/YourTeam/YourTeam";




const Dashboard = () => {
    return (

        
        <div className="card-container">
         
         <div className="card-div-one">
         <div className="card"> <Company /> </div>
          <div className="card"> <YourPlan /> </div>
          <div className="card"> <YourClients /> </div>
          <div className="card"> <Workspace /> </div>
         </div>

         <div className="card-div-two">
         <div className="card"> <YourTeam /> </div>
          <div className="card"> <Storyz /> </div>
         </div>

        </div>
    
    );
};

export default Dashboard;