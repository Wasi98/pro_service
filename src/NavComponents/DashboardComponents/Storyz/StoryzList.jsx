// props validation error showing, but correct
import './StoryzList.css';



const StoryzList = ({ story }) => {
    return (
        <div className="story-container">
        <ul className="story-list">
          {story.map((story, index) => (
            <li className="story-profile" key={index}>
              <img src={story.picture} alt={story.name} className="story-profile-img" />
              <div className="story-profile-details">
                <h3 className="story-profile-name">{story.name}</h3>
                <p className="story-profile-detail">{story.detail}</p>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default StoryzList;
