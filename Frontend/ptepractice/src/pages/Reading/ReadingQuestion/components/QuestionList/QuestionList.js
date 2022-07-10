import QuestionCard from "../QuestionCard/QuestionCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
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
                    <button className="m-[10px] font-semibold hover:bg-[#a69e9d33]"
                        onClick={()=> setQuestionNumber(prev => prev-1)}
                    >
                        <ArrowBackIos/>
                        Previous  
                    </button>
                }
                {(questionNumber===data.length-1)?false:true  &&
                    <button className="m-[10px] font-semibold hover:bg-[#a69e9d33]"
                        onClick={()=> setQuestionNumber(prev => prev+1)}
                    >
                        Next 
                        <ArrowForwardIos/>
                    </button>
                }
            </div>
        </div>
     );
}

export default QuestionList;