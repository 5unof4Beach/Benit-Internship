import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableContainer from "./DroppableContainer";

function DragList({ children }) {
  const [elements, setElements] = useState(createElements(children));
  const [correct, setCorrect] = useState(children.correct)

  useEffect(() => {
    setElements(createElements(children))
    setCorrect(children.correct)
  }, [children]);

  

  return (
    //Sinh ra cac Context zone
    <div
      className="
            w-[1200px] p-[20px]
        "
    >
      <DragDropContext onDragEnd={(result) => onDragEnd(result, elements, setElements)}>
        <div
          className="
            flex justify-around
        "
        >
          <DroppableContainer 
            elements={elements["source"]} 
            correct={correct}
            prefix={"source"} 
          />

          <DroppableContainer
            elements={elements["target"]}
            correct={correct}
            prefix={"target"}
          />
        </div>
      </DragDropContext>
    </div>
  );
}

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
  console.log("on drag end called");
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

  setElements(listCopy);
}

const createElements = (data) => {
  let elements = {};
  const passages = data.passages;

  const convert = passages.reduce((acc, item, index) => {
    return [...acc, { [index + 1]: item }];
  }, []);

  elements["source"] = convert;
  elements['target'] = []


  return elements;
};

export default DragList;

