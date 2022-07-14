import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableContainer from "./DroppableContainer";
import AnswerButton from "../../../components/AnswerButton/AnswerButton";

function DragList({children}) {
  const [elements, setElements] = useState({'source':[], 'target':[]});

  console.log(children)

  useEffect(() => {
    let data = children.passages.map((passage, index) => {
      let s = {};
      s[index + 1] = passage;

      return s;
    });

    let el = {};
    el["source"] = data;
    el["target"] = [];
    setElements(el);
  }, [children]);

  function onDragEnd(result) {
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

  return (
    //Sinh ra cac Context zone
    <div
        className="
            w-[1200px] p-[20px]
        "
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="
            flex justify-around
        ">
          <DroppableContainer elements={elements["source"]} prefix={"source"} />
          <DroppableContainer elements={elements["target"]} prefix={"target"} />
        </div>
      </DragDropContext>

      <AnswerButton/>
    </div>
  );
}

const testData = [
  {
    index: 1,
    passages: [
      "Having worked as a literacy tutor with teenagers, Ms. Bocking saw the need for good attitudes towards reading to be formed early on-with the help of more male role models.",
      "A University of Canberra student has launched the nation’s first father- led literacy project, to encourage fathers to become more involved in their children’s literacy.",
      "“There’s no program like this in Australia,” Ms. Bocking said, who devised the project as the final component of her community education degree at the University.",
      "Julia Bocking’s Literacy and Dads (LADS) project aims to increase the number of fathers participating as literacy helpers in K-2 school reading programs at Queanbeyan Primary Schools.",
    ],
    correct: "1320",
  },
  {
    index: 2,
    passages: [
      "“There’s no program like this in Australia,” Ms. Bocking said, who devised the project as the final component of her community education degree at the University.",
      "A University of Canberra student has launched the nation’s first father- led literacy project, to encourage fathers to become more involved in their children’s literacy.",
      "Having worked as a literacy tutor with teenagers, Ms. Bocking saw the need for good attitudes towards reading to be formed early on-with the help of more male role models.",
      "Julia Bocking’s Literacy and Dads (LADS) project aims to increase the number of fathers participating as literacy helpers in K-2 school reading programs at Queanbeyan Primary Schools.",
    ],
    correct: "1320",
  },
  {
    index: 3,
    passages: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
    correct: "1320",
  },
];

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

export default DragList;
