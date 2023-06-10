import "./RightContainer.css";
import { UserList } from "./Users/UserList";
import UserStats from "./Users/UserStats";
const RightContainer = () => {
  return (
    <div className="m-right-container">
      <UserStats></UserStats>
      <UserList></UserList>
    </div>
  );
};

export default RightContainer;
