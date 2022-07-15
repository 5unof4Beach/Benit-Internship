import { useState, useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import DragList from "./components/DraggableItem/DragList";
import Guide from "../components/Guide";
import Navigator from "../components/Navigator/Navigator";
import AnswerButton from "../components/AnswerButton/AnswerButton";
import { ShowAnswerContext } from "../../../Helper/Context";

function ReadingReorderPage(props) {
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
                            guidePassage='The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxer from the left panel to the right panel.'
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

export default ReadingReorderPage;