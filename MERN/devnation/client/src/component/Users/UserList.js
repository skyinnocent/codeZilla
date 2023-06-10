import "./UserList.css";
export const User = () => {
  return (
    <>
      <div className="user-profile">
        <div className="first">
          <img src="#" alt=""></img>
        </div>
        <div className="second">
          <h2>Omar Sulefeni</h2>
          <p>lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
      </div>
    </>
  );
};

export const UserList = () => {
  return (
    <div className="below">
      <h1 className="h1">Inbox</h1>
      <User></User>
      <User></User>
    </div>
  );
};

// export default { UserList, User };
