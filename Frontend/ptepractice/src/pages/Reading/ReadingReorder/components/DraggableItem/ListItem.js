import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";


const CardHeader = styled.div`
  font-weight: 500;
`;


const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;


const ListItem = ({ item, index }) => {
//   const randomHeader = useMemo(() => 'lorem.generateWords(5)', []);
  const randomHeader = 'header'

  return (
    //Component
    <Draggable draggableId={index.toString()} index={index}>
      {(provided, snapshot) => {
        return (
            //Css
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader>{randomHeader}</CardHeader>
            <span>{item}</span>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;