function AnswerButton({setShowAnswer}) {
    return ( 
        <div className="
          relative w-[100px] 
          flex justify-center items-center
        ">
        <button
          className="
          text-[18px] h-[50px] p-[5px] bg-[#FECC65]
          rounded-[5px] font-semibold
          flex items-center
          hover:drop-shadow-[1px_1px_5px_rgba(0,0,0,0.8)] 
          duration-300
          "
          onClick={() => setShowAnswer(prev => !prev)}
        >
          Answer
        </button>
      </div>
     );
}

export default AnswerButton;