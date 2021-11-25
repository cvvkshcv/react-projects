export default function Quiz({ question, optionSelect }) {
  return (
    <div className="quiz-container__question">
      <p>{question.question}</p>
      <div className="quiz-container__options">
        <ul className="quiz-container__ul">
          {question.options.map((option, i) => {
            return (
              <li
                className="quiz-container__li"
                key={i}
                onClick={() => optionSelect(i)}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
