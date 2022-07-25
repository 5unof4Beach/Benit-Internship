import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableContainer from "./DroppableContainer";
import Paragraph from "../Paragraph/Paragraph";

function DragList({ children }) {
  const [elements, setElements] = useState(createElements(children));
  const [segments, setSegments] = useState(children.segments)

  useEffect(() => {
    setElements(createElements(children))
    setSegments(children.segments)
  }, [children])

  return (
    //Sinh ra cac Context zone
    <div
      className="
          w-full p-[20px]
        "
    >
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, elements, setElements)}
      >
        <div
          className="
            flex flex-col justify-around items-center
        "
        >
          <Paragraph 
            elements={elements}
            correct={children.correct}  
          >
            {segments}
          </Paragraph>
          
          <DroppableContainer elements={elements["source"]} prefix={"source"} />
        </div>
      </DragDropContext>
    </div>
  );
}


// Support function
const removeFromList = (list, index) => {
  //Tra ve phan tu va mang da bi loai phan tu
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  //tra ve mang them phan tu moi
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

function onDragEnd(result, elements, setElements) {
  if (!result.destination) {
    return;
  }

  const listCopy = { ...elements };

  const sourceList = listCopy[result.source.droppableId];
  let [removedElement, newSourceList] = removeFromList(
    sourceList,
    result.source.index
  );

  console.log(removedElement);

  let destinationList = listCopy[result.destination.droppableId];

  if (
    // result.destination.droppableId !== "source" &&
    result.destination.droppableId !== result.source.droppableId &&
    listCopy[result.destination.droppableId].length !== 0
  ) {
    let putBackItem = destinationList.pop();
    newSourceList = [...newSourceList, putBackItem];
  }

  listCopy[result.source.droppableId] = newSourceList;
  destinationList = listCopy[result.destination.droppableId];

  listCopy[result.destination.droppableId] = addToList(
    destinationList,
    result.destination.index,
    removedElement
  );

  setElements(listCopy);
}

const createElements = (data) => {
  let temp = {};
  const answers = data.answers;
  const segments = data.segments;

  const convert = answers.reduce((acc, item, index) => {
    return [...acc, { [index + 1]: item }];
  }, []);

  temp["source"] = convert;

  const elements = segments.reduce((acc, item, index) => {
    if (index === segments.length - 1) return acc;

    return {
      ...acc,
      [(index + 1).toString()]: [],
    };
  }, temp);

  return elements;
};

export default DragList;


