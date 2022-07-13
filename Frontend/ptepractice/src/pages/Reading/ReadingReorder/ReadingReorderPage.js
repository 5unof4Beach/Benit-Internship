import { useState, useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import DragList from "./components/DraggableItem/DragList";
import Guide from "../components/Guide";
import Navigator from "../components/Navigator/Navigator";

function ReadingReorderPage(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    
    // useEffect(()=>{
        // getData()
        //     .then((res)=>{
        //         return res.json()
        //     })
        //     .then(res => {
        //         setIsLoading(!isLoading)
        //         setData(res)
        //     })
    // }, [])
    
    return ( 
        <div
            className="
                w-[70%] min-w-[700px]
                flex flex-col items-center
            "
        >
            <Guide 
                leadingIndex={1}
                guidePassage='The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxer from the left panel to the right panel.'
            />
            <DragList/>

            <Navigator questionNumber={1} setQuestionNumber numberOfQuestion/>
            {/* {isLoading?
                <Loading/>
                :
                <DragList></DragList>
                } */}
        </div>
     );
}

const getData = () => {
    let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      return fetch("http://localhost:8080/api/question", options)
}

export default ReadingReorderPage;