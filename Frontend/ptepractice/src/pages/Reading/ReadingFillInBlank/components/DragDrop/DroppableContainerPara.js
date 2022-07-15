import { Droppable } from "react-beautiful-dnd";
import DraggableItemPara from "./DraggableItemPara";
import React from "react";

function DroppableContainerPara({ prefix, elements, correct }) {
  //Sinh ra cac droppable
  elements = [{10:'test'}]
  return (
    // CSS
    <span
      className="
        inline-block
      "
    >
      {/* <div 
        className="
          flex justify-center rounded-t-[4px] p-[20px]
          border-l-[1px] border-t-[1px] border-r-[1px] border-black
          font-semibold
        "
      >{1}</div> */}

      {/* rbd component */}
      <Droppable droppableId={prefix} direction='horizontal'>
        {(provided) => (
          <span
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="
              min-w-[80px]  ml-[5px] mr-[5px]
              border-[1px] border-black 
              flex justify-center
              rounded-[6px]
            "
          >
            {elements.map((item, index) => (
              <DraggableItemPara 
                // correctAnswer={correct[index]}
                key={index} 
                item={item} 
                index={index} 
                prefix={prefix}
              />
            ))}
            {provided.placeholder}
          </span>
        )}
      </Droppable>

    </span>
  );
}



export default DroppableContainerPara;
