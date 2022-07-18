import { Draggable } from "react-beautiful-dnd";
import React, { useContext } from "react";
import { ShowAnswerContext } from "../../../../../Helper/Context";

const DraggableItemPara = ({ item, index, prefix, correctAnswer }) => {
  const { showAnswer } = useContext(ShowAnswerContext);

  const header = Object.keys(item)[0];
  const content = item[header];
  const defaultStyle = `w-full min-w-[80px] p-[5px] leading-[20px]
                        flex justify-center rounded-[6px] `;

  const normalStyle =  defaultStyle ;

  const wrong = defaultStyle + `bg-[#f44655]`;

  const right = defaultStyle + `bg-[#34ef63]`;
  return (
    //Component
    <Draggable draggableId={index.toString() + prefix} index={index}>
      {(provided, snapshot) => {
        return (
          //Css
          <span
            className={
              showAnswer && prefix !== "source"
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
            {/* <span className=" font-medium ">{header}</span> */}
            <span>{content}</span>
          </span>
        );
      }}
    </Draggable>
  );
};

export default DraggableItemPara;
