import { useState, useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import {DragDropContext} from 'react-beautiful-dnd'

function ReadingReorderPage({props}) {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    
    useEffect(()=>{
        // getData()
        //     .then((res)=>{
        //         return res.json()
        //     })
        //     .then(res => {
        //         setIsLoading(!isLoading)
        //         setData(res)
        //     })
    }, [])
    
    return ( 
        <div
            className="
            
                w-[70%] min-w-[1000px]
                flex justify-items-center
            "
        >
            {isLoading?
                <Loading/>
                :
                <></>
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

export default ReadingReorderPage;