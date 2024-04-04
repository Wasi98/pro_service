// props validation error showing, but correct
import './ProfileList.css';



const ProfileList = ({ user }) => {
    return (
        <div className="app-container">
        <ul className="user-list">
          {user.map((user, index) => (
            <li className="user-profile" key={index}>
              <img src={user.picture} alt={user.name} className="user-profile-img" />
              <div className="user-profile-details">
                <h3 className="user-profile-name">{user.name}</h3>
                <p className="user-profile-detail">{user.detail}</p>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ProfileList;
