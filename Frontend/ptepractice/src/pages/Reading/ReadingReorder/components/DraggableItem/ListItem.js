import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";

const DragItem = styled.div`
  width: 95%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid gray;
  background: #FFF3D2;
  margin: 0 0 10px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;


const ListItem = ({ item, index, prefix }) => {
    const header = Object.keys(item)[0]
    const content = item[header]
  return (
    //Component
    <Draggable draggableId={(index).toString() + prefix} index={index}>
      {(provided, snapshot) => {
        return (
            //Css
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
                className="
                    font-medium
                "
            >{header}</div>
            <span>{content}</span>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;