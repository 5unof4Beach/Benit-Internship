import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
  width: 40%;
`;

function DroppableContainer({ prefix, elements }) {
  //Sinh ra cac droppable
  return (
    // CSS
    <DroppableStyles>
      <ColumnHeader>{prefix}</ColumnHeader>
      {/* rbd component */}
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div 
            {...provided.droppableProps} ref={provided.innerRef}
            className='
              h-[700px]
            '
          >
            {elements.map((item, index) => (
              <ListItem key={index} item={item} index={index} prefix={prefix}/>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DroppableStyles>
  );
}

export default DroppableContainer;
