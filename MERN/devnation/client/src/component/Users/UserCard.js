import "./UserCard.css";
import { User } from "./UserList";
const UserCard = () => {
  return (
    <>
      <div className="left-main-container">
        <div className="left-left">
          <h1>Event Organization Website</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="little-ones">
            <span>
              <strong>$40 </strong> /hr
            </span>
            <span>
              <strong>$1200 </strong> spend
            </span>
            <span>
              <strong>15 Days </strong> left
            </span>
            <span>
              <strong>2 Doc </strong> submitted
            </span>
          </div>
        </div>
        <div className="left-right">
          <div>
            <div className="boxify">
              <User></User>
            </div>
            <div className="up">
              <button className="button-primary">Contact</button>
            </div>
            <div className="up">
              <button className="button-primary non">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
