import Button from "../../../../components/Button";
import { TwoWayBindingRadio } from "../../../Extras/DOMEvents";

function QuestionCard({data, children,...props}) {
  return (
    <div
        className="flex flex-col items-center mt-[10px]"
    >
      <div
        className="
            flex w-[90%] items-start justify-start
            mt-[10px] ml-[10px]
            
        "   
      >
        <p
            className="
                        h-[25px] w-[50px]
                        bg-[#6C7975] leading-[100%] rounded-[4px]
                        font-semibold
                        text-xl text-white
                        flex items-center
                    "
        
        >#{children.index}</p>
        <p
          className="
                    font-semibold
                    w-[95%] min-w-[400px] ml-[20px] leading-[100%]
                    text-xl
                "
        >
          Read the text and answer the multiple-choice question by selecting the
          correct responses. Only one response is correct.
        </p>
      </div>
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
        <TwoWayBindingRadio>{children.answers}</TwoWayBindingRadio>
      </div>
      <div className=" flex justify-start">
        <Button>Answer</Button>
      </div>
    </div>
  );
}

export default QuestionCard;
