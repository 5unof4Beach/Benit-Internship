import QuestionCard from "./components/QuestionCard/QuestionCard";

function ReadingQuestionPage({props}) {
    return ( 
        <div
            className="
                border-[2px] border-black
                w-[70%] h-[1000px]
                flex justify-items-center
            "
        >
            <QuestionCard/>
        </div>
     );
}

export default ReadingQuestionPage;