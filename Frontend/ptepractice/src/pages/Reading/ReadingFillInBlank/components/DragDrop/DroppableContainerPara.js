import { Droppable } from "react-beautiful-dnd";
import DraggableItemPara from "./DraggableItemPara";
import React from "react";

function DroppableContainerPara({ prefix, elements, correctAnswer }) {
  //Sinh ra cac droppable
  return (
    // CSS
    <span
      className="
        inline-block
      "
    >
      {/* rbd component */}
      <Droppable droppableId={prefix} direction='horizontal'>
        {(provided) => (
          <span
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="
              w-[150px] ml-[5px] mr-[5px]
              border-[1px] border-black 
              flex flex-wrap justify-center
              rounded-[6px]
            "
          >
            {elements.map((item, index) => (
              <DraggableItemPara 
                correctAnswer={correctAnswer}
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
