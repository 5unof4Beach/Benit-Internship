import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
function Navigator({questionNumber,setQuestionNumber, numberOfQuestion}) {
    return (  
        <div className="flex justify-end" >
                {(questionNumber===0)?false:true  &&
                    <button className="m-[10px] font-semibold hover:bg-[#a69e9d33]"
                        onClick={()=> setQuestionNumber(prev => prev-1)}
                    >
                        <ArrowBackIos/>
                        Previous  
                    </button>
                }
                {(questionNumber === numberOfQuestion-1)?false:true  &&
                    <button className="m-[10px] font-semibold hover:bg-[#a69e9d33]"
                        onClick={()=> setQuestionNumber(prev => prev+1)}
                    >
                        Next 
                        <ArrowForwardIos/>
                    </button>
                }
            </div>
    );
}

export default Navigator;