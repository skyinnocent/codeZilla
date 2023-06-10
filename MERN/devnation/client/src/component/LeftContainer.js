import "./LeftContainer.css";
import UserCard from "./Users/UserCard";
const LeftContainer = () => {
  return (
    <div className="m-left-container">
      <UserCard></UserCard>
      <UserCard></UserCard>
    </div>
  );
};

export default LeftContainer;
