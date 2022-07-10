import QuestionCard from "../QuestionCard/QuestionCard";
import Button from "../../../../components/Button";

function QuestionList({data, ...props}) {
    return ( 
        <div 
            className="
                h-full w-full
            "
        >
            {console.log(data)}
            {data.map(dat => {
                return <QuestionCard>{dat}</QuestionCard>
            })}
            

            <div className="flex justify-end" >
                <Button>Previous</Button>
                <Button>Next</Button>
            </div>
        </div>
     );
}

export default QuestionList;