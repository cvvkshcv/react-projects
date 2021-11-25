import { useState } from "react";
import "./App.css";
import questions from "./assets/questions";
import Quiz from "./components/Quiz";

function App() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [result, setResult] = useState(false);
  const question = questions[questionIdx];

  const optionSelect = (i) => {
    if (questions[questionIdx].answer === i) {
      setCorrectAns(correctAns + 1);
    }
    const nextQuestion = questionIdx + 1;
    console.log("nextQuestion ", nextQuestion);
    if (nextQuestion < questions.length) {
      setQuestionIdx(nextQuestion);
    } else {
      setResult(true);
    }
  };

  const reset = () => {
    setQuestionIdx(0);
    setCorrectAns(0);
    setResult(false);
  };

  return (
    <div className="quiz-container">
      {result ? (
        <div align="center">
          <h1>Total score is : {correctAns}</h1>
          <button onClick={reset}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <Quiz question={question} optionSelect={optionSelect} />
        </>
      )}
    </div>
  );
}

export default App;
