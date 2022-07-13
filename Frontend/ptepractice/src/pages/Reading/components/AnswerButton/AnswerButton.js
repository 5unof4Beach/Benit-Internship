function AnswerButton({setShowAnswer}) {
    return ( 
        <div className="relative w-[90%] flex justify-start mt-[30px]">
        <button
          className="
          absolute top-[5px] left-[5px]
          text-[18px] p-[5px] bg-[#FECC65]
          rounded-[5px] font-semibold
          flex items-center
          hover:top-0 hover:left-0 
          hover:drop-shadow-[1px_1px_5px_rgba(0,0,0,0.8)] 
          duration-300
          "
          onClick={() => setShowAnswer(true)}
        >
          Answer
        </button>
      </div>
     );
}

export default AnswerButton;