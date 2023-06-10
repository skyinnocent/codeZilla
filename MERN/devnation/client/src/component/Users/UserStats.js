import "./UserStats.css";
const UserStats = () => {
  return (
    <>
      <div className="user-stats">
        <h1 className="overview">Over View</h1>
        <div className="US-Overview-box-2">
          <div className="US-Overview-left">
            <div>
              <h1>3</h1>
              <h4>Running Projects</h4>
            </div>
            <div>
              <h1>12</h1>
              <h4>Completed Projects</h4>
            </div>
          </div>
          <div className="US-Overview-right">
            <div>
              <h1>$1200</h1>
              <h4>Have to Pay</h4>
            </div>
            <div>
              <h1>%6500</h1>
              <h4>Total Payment</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStats;
