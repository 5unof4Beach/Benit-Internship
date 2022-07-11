import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableElement from "./DroppableElement";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border: 4px solid indianred;
  border-radius: 6px;
  width: 1000px;
`;

const ListGrid = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: gray;
  ${"" /* grid-gap: 8px; */}
`;

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

function DragList() {
  const [elements, setElements] = React.useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    console.log(listCopy);
    setElements(listCopy);
  };

  return (
    //Sinh ra cac Context zone
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          Context Zone
            <DroppableElement
            elements={testData[0].passages}
            // key={listKey}
            prefix={'Source'}
            />
            <DroppableElement
            elements={[]}
            // key={listKey}
            prefix={'Target'}
            />
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

const testData = [
    {
        index:1,
        passages:[
            'Having worked as a literacy tutor with teenagers, Ms. Bocking saw the need for good attitudes towards reading to be formed early on-with the help of more male role models.',
            'A University of Canberra student has launched the nation’s first father- led literacy project, to encourage fathers to become more involved in their children’s literacy.',
            '“There’s no program like this in Australia,” Ms. Bocking said, who devised the project as the final component of her community education degree at the University.',
            'Julia Bocking’s Literacy and Dads (LADS) project aims to increase the number of fathers participating as literacy helpers in K-2 school reading programs at Queanbeyan Primary Schools.'
        ],
        correct:'1320'
    }
]

export default DragList;
