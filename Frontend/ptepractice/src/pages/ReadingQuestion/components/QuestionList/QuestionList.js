import QuestionCard from "../QuestionCard/QuestionCard";
import Button from "../../../../components/Button";
import { useState } from "react";

function QuestionList({data, ...props}) {
    const [questionNumber, setQuestionNumber] = useState(0)

    return ( 
        <div 
            className="
                h-full w-full
            "
        >

            <QuestionCard>{data[questionNumber]}</QuestionCard>
            

            <div className="flex justify-end" >
                {(questionNumber===0)?false:true  &&
                    <button className="m-[10px]"
                        onClick={()=> setQuestionNumber(prev => prev-1)}
                    >
                        Previous  
                    </button>
                }
                {(questionNumber===data.length-1)?false:true  &&
                    <button className="m-[10px]"
                        onClick={()=> setQuestionNumber(prev => prev+1)}
                    >
                        Next  
                    </button>
                }
            </div>
        </div>
     );
}

export default QuestionList;