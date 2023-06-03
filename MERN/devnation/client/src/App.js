import NavBar from "./component/NavBar";
import AddUser from "./component/AddUser";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <section className="midsection">
          <h1>Ongoing Projects</h1>
          <AddUser></AddUser>
        </section>
      </main>
    </div>
  );
}

export default App;
