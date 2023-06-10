import "./MainContainer.css";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const MainContainer = () => {
  return (
    <div className="main-container">
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
    </div>
  );
};

export default MainContainer;
