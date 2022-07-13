function Guide({leadingIndex, guidePassage}) {
  return (
    <div
        className="
            flex w-[90%] items-start justify-start
            mt-[10px] ml-[10px]
        "
    >
      <p
        className="
                        h-[25px] w-[50px]
                        bg-[#6C7975] leading-[100%] rounded-[4px]
                        font-semibold
                        text-xl text-white
                        flex items-center
                    "
      >
        #{leadingIndex}
      </p>
      <p
        className="
                    font-semibold
                    w-[95%] min-w-[400px] ml-[20px] leading-[100%]
                    text-xl
                "
      >
        {guidePassage}
      </p>
    </div>
  );
}

export default Guide;
