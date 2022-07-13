import { TwoWayBindingRadio } from "../../../../Extras/DOMEvents";
import { useState, useEffect } from "react";
import Guide from "../../../components/Guide/Guide";
import AnswerButton from "../../../components/AnswerButton/AnswerButton";

function QuestionCard({ data, children, ...props }) {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [children.index]);

  return (
    <div className="flex flex-col items-center mt-[10px] h-[500px]">
      <Guide
        leadingIndex={children.index}
        guidePassage="Read the text and answer the multiple-choice question by selecting the
          correct responses. Only one response is correct."
      />
      <p
        className="
                    paragraph
                    w-[90%] min-w-[400px] mt-[20px] ml-[10px]
                    font-normal text-[18px]
                "
      >
        {children.paragraph}
      </p>
      <p
        className="
                    question
                    w-[90%] min-w-[400px] mt-[20px] ml-[10px]
                    font-semibold text-xl
                "
      >
        {children.question}
      </p>

      <div className="w-[90%] ml-[10px] mt-[20px]">
        <TwoWayBindingRadio
          showAnswer={showAnswer}
          correctAnswer={children.correct}
        >
          {children.answers}
        </TwoWayBindingRadio>
      </div>
      <AnswerButton setShowAnswer={setShowAnswer}/>
    </div>
  );
}

export default QuestionCard;
