import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
  width: 45%;
  min-height: 500px;
`;

function DroppableContainer({ prefix, elements }) {
  //Sinh ra cac droppable
  return (
    // CSS
    <div
      className="
        w-[45%]
        min-h-[500px] 
        rounded-[6px] 
        p-[10px] bg-[#d4d4d4]
      "
    >
      <div className="mb-[20px] flex justify-center">{prefix}</div>
      {/* rbd component */}
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="
              pb-[20px]
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
