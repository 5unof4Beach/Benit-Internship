import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";

function DroppableContainer({ prefix, elements }) {
  //Sinh ra cac droppable
  return (
    // CSS
    <div
      className="
        w-[50%] h-auto
        rounded-[6px] p-[10px] 
        
      "
    >
      <div 
        className="
          flex justify-center rounded-t-[4px] p-[20px]
          border-l-[1px] border-t-[1px] border-r-[1px] border-black
          font-semibold
        "
      >{prefix.toUpperCase()}</div>
      {/* rbd component */}
      <Droppable droppableId={prefix}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="
              pt-[10px]
              min-h-[400px] 
              border-[1px] border-slate-700 rounded-b-[4px]
              flex flex-col items-center justify-items-center
              duration-300
            "
          >
            {elements.map((item, index) => (
              <ListItem key={index} item={item} index={index} prefix={prefix} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  );
}

export default DroppableContainer;
