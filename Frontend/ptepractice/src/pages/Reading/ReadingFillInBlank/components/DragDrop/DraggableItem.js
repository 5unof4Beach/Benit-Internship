import { Draggable } from "react-beautiful-dnd";
import React, { useContext } from "react";
import { ShowAnswerContext } from "../../../../../Helper/Context";

const DraggableItem = ({ item, index, prefix, correctAnswer }) => {
  const { showAnswer } = useContext(ShowAnswerContext);

  const header = Object.keys(item)[0];
  const content = item[header];
  const defaultStyle = `min-w-[80px] p-[5px] ml-[5px] mr-[5px] rounded-[6px] 
                    border-[1px] border-black `;

  const normalStyle =  defaultStyle + `bg-[#FFF3D2]`;

  const wrong = defaultStyle + `bg-[#f44655]`;

  const right = defaultStyle + `bg-[#34ef63]`;
  return (
    //Component
    <Draggable draggableId={index.toString() + prefix} index={index}>
      {(provided, snapshot) => {
        return (
          //Css
          <div
            className={
              showAnswer && prefix === "target"
                ? header - 1 == correctAnswer
                  ? right
                  : wrong
                : normalStyle
            }
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {/* <div className=" font-medium ">{header}</div> */}
            <span>{content}</span>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DraggableItem;
