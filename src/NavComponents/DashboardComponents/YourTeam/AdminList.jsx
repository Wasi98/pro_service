import './AdminList.css';



const AdminList = ({ admin }) => {
    return (
        <div className="add-container">
        <ul className="admin-list">
          {admin.map((admin, index) => (
            <li className="admin-profile" key={index}>
              <img src={admin.picture} alt={admin.name} className="admin-profile-img" />
              <div className="admin-profile-details">
                <h3 className="admin-profile-name">{admin.name}</h3>
                <p className="admin-profile-detail">{admin.detail}</p>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default AdminList;