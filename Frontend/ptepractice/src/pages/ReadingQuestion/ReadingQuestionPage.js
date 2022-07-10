import QuestionCard from "./components/QuestionCard/QuestionCard";
import QuestionList from "./components/QuestionList/QuestionList";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";

function ReadingQuestionPage({props}) {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    
    useEffect(()=>{
        getData()
            .then((res)=>{
                return res.json()
            })
            .then(res => {
                setIsLoading(!isLoading)
                setData(res)
            })
    }, [])
    
    return ( 
        <div
            className="
            
                w-[70%] min-w-[700px]
                flex justify-items-center
            "
        >
            {isLoading?
                <Loading/>
                :
                <QuestionList data={data??[]}></QuestionList>
                }
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

export default ReadingQuestionPage;