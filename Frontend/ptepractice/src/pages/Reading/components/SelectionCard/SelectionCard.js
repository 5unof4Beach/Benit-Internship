function SelectionCard() {
  return (
    <div
      className="
                relative 
                min-w-[300px] min-h-[300px]
                grow
            "
    >
      <div
        className="
                absolute
                h-[90%] w-[90%] top-[5px] left-[5px]
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
