import { useState, useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import DragList from "./components/DragDrop/DragList";
import Guide from "../components/Guide";
import Navigator from "../components/Navigator/Navigator";
import AnswerButton from "../components/AnswerButton/AnswerButton";
import { ShowAnswerContext } from "../../../Helper/Context";

function ReadingFillInBlankPage(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [questionNumber, setQuestionNumber] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)

    
    useEffect(()=>{
        getData()
            .then((res)=>{
                return res.json()
            })
            .then(res => {
                setIsLoading(false)
                setData(res)
                // console.log(res)
            })
    }, [])

    useEffect(() => {
        setShowAnswer(false)
    }, [questionNumber])
    
    return ( 
        <ShowAnswerContext.Provider value={{showAnswer}}>
            <div
                className="
                    w-[70%] min-w-[700px]
                    flex flex-col items-center
                "
            >
                {isLoading?
                    <Loading/>
                    :
                    <>
                        <Guide 
                            leadingIndex={questionNumber+1}
                            guidePassage='In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.'
                        />
                        <DragList>{data[questionNumber]}</DragList>
                        <div 
                            className="
                                w-full flex justify-between items-center
                            "
                        >
                            <AnswerButton setShowAnswer={setShowAnswer}/>
                            <Navigator 
                                questionNumber={questionNumber} 
                                setQuestionNumber={setQuestionNumber} 
                                numberOfQuestion={data.length}/
                            >
                        </div>
                    </>
                    
                    }
            </div>
        </ShowAnswerContext.Provider>
     );
}

const getData = () => {
    const URL = 'http://localhost:8080/api/reading/pr'

    let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      return fetch(URL, options)
}

export default ReadingFillInBlankPage;