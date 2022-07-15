import { TwoWayBindingRadio } from "../../../../Extras/DOMEvents";
import Guide from "../../../components/Guide/Guide";

function QuestionCard({ data, children, showAnswerState, ...props }) {
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
          showAnswer={showAnswerState}
          correctAnswer={children.correct}
        >
          {children.answers}
        </TwoWayBindingRadio>
      </div>
      {/* <AnswerButton setShowAnswer={setShowAnswer}/> */}
    </div>
  );
}

export default QuestionCard;
