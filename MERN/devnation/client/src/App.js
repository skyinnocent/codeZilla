import NavBar from "./component/NavBar";
import AddUser from "./component/AddUser";
import MainContainer from "./component/MainContainer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <section className="midsection">
        <h1>Ongoing Projects</h1>
        <AddUser></AddUser>
      </section>
      <main>
        <section>
          <MainContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
