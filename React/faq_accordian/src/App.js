import Question from "./components/Questions";
import QuestionData from "./components/data/QuestionData";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>This page is Not styled</h1>

      <div>
        {QuestionData.map((e) => {
          return <Question q={e.q} answer={e.text}></Question>;
        })}
      </div>
    </div>
  );
}

export default App;
