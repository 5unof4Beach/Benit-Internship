import QuestionCard from "../QuestionCard/QuestionCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import Navigator from "../../../components/Navigator/Navigator";

function QuestionList({data, ...props}) {
    const [questionNumber, setQuestionNumber] = useState(0)

    return ( 
        <div 
            className="
                h-full w-full
            "
        >
            <QuestionCard>{data[questionNumber]}</QuestionCard>
            <Navigator questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} numberOfQuestion={data.length}/>
        </div>
     );
}

export default QuestionList;