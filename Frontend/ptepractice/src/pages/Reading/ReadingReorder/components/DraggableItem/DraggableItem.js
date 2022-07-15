import { Draggable } from "react-beautiful-dnd";
import React, {useContext} from "react";
import { ShowAnswerContext } from "../../../../../Helper/Context";

const DraggableItem = ({ item, index, prefix, correctAnswer }) => {
    const {showAnswer} = useContext(ShowAnswerContext)
    console.log(showAnswer)


    const header = Object.keys(item)[0]
    const content = item[header]
    const defaultStyle =  `w-[95%] p-[10px] mb-[10px] rounded-[6px] 
                    border-[1px] border-black bg-[#FFF3D2]`

    const wrong = `w-[95%] p-[10px] mb-[10px] rounded-[6px] 
                    border-[1px] border-gray bg-[#f44655]`

    const right = `w-[95%] p-[10px] mb-[10px] rounded-[6px] 
                    border-[1px] border-gray bg-[#34ef63]`
  return (

    //Component
    <Draggable draggableId={(index).toString() + prefix} index={index}>
      {(provided, snapshot) => {
        return (
            //Css
          <div
            className={(showAnswer && prefix=='target') ? ((header-1) == correctAnswer ? right : wrong):defaultStyle}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className=" font-medium " >{header}</div>
            <span>{content}</span>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DraggableItem;