import { TwoWayBindingRadio } from "../../../Extras/DOMEvents";

function QuestionCard({data, ...props}) {
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
        
        >#1</p>
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
        These resolutions, demanding in effect that slavery be thus safeguarded-almost to the extent of introducing it into the free states-really foreshadowed the Democratic platform of 1860 which led to the great split in that party, the victory of the Republicans under Lincoln, the subsequent secession of the more radical southern states, and finally the Civil War, for it was inevitable that the North, when once aroused, would bitterly resent such pro-slavery demands.
      </p>
      <p
        className="
                    question
                    w-[90%] min-w-[400px] mt-[20px] ml-[10px]
                    font-semibold text-xl
                "
      >
        Which of the following best summarises the main message of this text?
      </p>

      <div className="w-[90%] ml-[10px] mt-[20px]">
        <TwoWayBindingRadio></TwoWayBindingRadio>
      </div>
    </div>
  );
}

export default QuestionCard;
