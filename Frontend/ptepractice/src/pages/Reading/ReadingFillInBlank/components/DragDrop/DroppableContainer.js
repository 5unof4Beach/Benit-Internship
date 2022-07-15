import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";
import React from "react";

function DroppableContainer({ prefix, elements, correct }) {
  //Sinh ra cac droppable
  return (
    // CSS
    <div
      className="
        w-[70%] h-auto
        rounded-[6px]
      "
    >
      {/* <div 
        className="
          flex justify-center rounded-t-[4px] p-[20px]
          border-l-[1px] border-t-[1px] border-r-[1px] border-black
          font-semibold
        "
      >{prefix.toUpperCase()}</div> */}

      {/* rbd component */}
      <Droppable droppableId={prefix} direction='horizontal'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="
              min-h-[80px]
              border-l-[1px] border-r-[1px] border-b-[1px] border-slate-700 rounded-b-[4px]
              flex items-center justify-start
              duration-300
            "
          >
            {elements.map((item, index) => (
              <DraggableItem 
                // correctAnswer={correct[index]}
                key={index} 
                item={item} 
                index={index} 
                prefix={prefix}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  );
}



export default DroppableContainer;
