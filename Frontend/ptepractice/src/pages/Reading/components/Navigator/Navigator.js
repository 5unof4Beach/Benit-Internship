import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
function Navigator({ questionNumber, setQuestionNumber, numberOfQuestion }) {

  const enabled = `font-semibold bg-[#FECC65] 
                  hover:drop-shadow-[1px_1px_5px_rgba(0,0,0,0.8)] 
                  duration-200
                  w-[150px] h-[50px] rounded-[6px] m-[5px]`;

  const disabled = `font-semibold text-[gray]
                    w-[150px] h-[50px] rounded-[6px] m-[5px]`;

  return (
    <div className="flex justify-between w-[auto] ">
      <button
        className={questionNumber === 0 ? 
									disabled 
									: 
									enabled}

        onClick={questionNumber === 0 ?
								()=>{}
								:
								() => setQuestionNumber((prev) => prev - 1)}
      >
        <ArrowBackIos />
        Previous
      </button>

      <button
        className={questionNumber === numberOfQuestion - 1 ? 
									disabled 
									: 
									enabled}

        onClick={questionNumber === numberOfQuestion - 1 ?
								()=>{}
								:
								() => setQuestionNumber((prev) => prev + 1)}
      >
        Next
        <ArrowForwardIos />
      </button>
    </div>
  );
}

export default Navigator;
