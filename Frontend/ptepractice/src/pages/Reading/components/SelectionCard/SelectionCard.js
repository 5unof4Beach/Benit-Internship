function SelectionCard() {
  return (
    <div
      className="
                relative 
                grow-[2]
                min-w-[200px]
            "
    >
      <div
        className="
                z-50
                absolute
                w-[90%] h-[90%] top-[5px] left-[5px]
                drop-shadow-md bg-[#EFEFEF] rounded-[4px] border-[2px] border-black
                hover:top-0 hover:left-0 
                hover:drop-shadow-[10px_10px_1px_rgba(0,0,0,0.8)] 
                duration-200
                "
      >
        Card
      </div>
    </div>
  );
}

export default SelectionCard;
