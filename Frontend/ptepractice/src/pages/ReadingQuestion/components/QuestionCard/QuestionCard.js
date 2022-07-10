import { TwoWayBindingRadio } from "../../../Extras/DOMEvents";
import { useState, useEffect } from "react";

function QuestionCard({data, children,...props}) {
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(()=>{
    setShowAnswer(false)
  }, [children.index])

  return (
    <div
        className="flex flex-col items-center mt-[10px] h-[500px]"
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
        <TwoWayBindingRadio
           showAnswer={showAnswer}
           correctAnswer={children.correct}
        >
          {children.answers}
        </TwoWayBindingRadio>
      </div>
      <div className="relative w-[90%] flex justify-start mt-[30px]">
        <button
          className="
          absolute top-[5px] left-[5px]
          text-[18px] p-[5px] bg-[#FECC65]
          rounded-[5px] font-semibold
          flex items-center
          hover:top-0 hover:left-0 
          hover:drop-shadow-[1px_1px_5px_rgba(0,0,0,0.8)] 
          duration-300
          "
          onClick={() => setShowAnswer(true)}
        >Answer</button>
      </div>
    </div>
  );
}

export default QuestionCard;
