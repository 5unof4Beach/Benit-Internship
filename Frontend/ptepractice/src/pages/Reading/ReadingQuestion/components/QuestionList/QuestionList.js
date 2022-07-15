import QuestionCard from "../QuestionCard/QuestionCard";
import { useState, useEffect } from "react";
import Navigator from "../../../components/Navigator/Navigator";
import AnswerButton from "../../../components/AnswerButton/AnswerButton";

function QuestionList({ data, ...props }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [questionNumber]);

  return (
    <div
      className="
                h-full w-full
            "
    >
      <QuestionCard showAnswerState={showAnswer}>
        {data[questionNumber]}
      </QuestionCard>
      <div
        className="
            w-full flex justify-between items-center 
        "
      >
        <AnswerButton setShowAnswer={setShowAnswer}></AnswerButton>
        <Navigator
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          numberOfQuestion={data.length}
        />
      </div>
    </div>
  );
}

export default QuestionList;
