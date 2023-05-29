import Question from "./components/Questions";
import QuestionData from "./components/data/QuestionData";

function App() {
  return (
    <div className="App">
      <div>
        {QuestionData.map((e) => {
          return <Question q={e.q} answer={e.text}></Question>;
        })}
      </div>
    </div>
  );
}

export default App;
