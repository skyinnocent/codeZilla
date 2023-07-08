import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
function App() {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);

  return (
    <div className="App">
      <h4>App</h4>
      <h3 style={{ color: "white" }}>Current Amount :{amount}</h3>
      <h3>Total Bonus :{points} </h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
