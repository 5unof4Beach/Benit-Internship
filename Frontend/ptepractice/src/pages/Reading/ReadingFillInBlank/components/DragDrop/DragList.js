import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableContainer from "./DroppableContainer";
import DroppableContainerPara from "./DroppableContainerPara";

function DragList({ children }) {
  
  let el = {};
  el["source"] = fakeElement;
  el["target"] = [];
  el["1"] = [];
  el["2"] = [];
  el["3"] = [];
  el["4"] = [];
  el["5"] = [];
  const [elements, setElements] = useState(el);

  useEffect(() => {
    // let data = children.passages.map((passage, index) => {
    //   let s = {};
    //   s[index + 1] = passage;

    //   return s;
    // });

    let el = {};
    el["source"] = fakeElement;
    el["target"] = [];
    el["1"] = [];
    el["2"] = [];
    el["3"] = [];
    el["4"] = [];
    el["5"] = [];

    return el

    // setElements(el);
  }, []);


  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    let [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );

    const destinationList = listCopy[result.destination.droppableId];
    
    let putBackItem = destinationList.pop(0);
    newSourceList = [...newSourceList, putBackItem];
    listCopy[result.source.droppableId] = newSourceList;

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
        <div
          className="
            flex flex-col justify-around items-center
        "
        >
          {/* <DroppableContainer
            elements={elements["target"]}
            correct={correct}
            prefix={"target"}
          /> */}

          <div
            className="
                      w-[70%] min-h-[300px]
                      border-[1px] border-black rounded-t-[6px] p-[10px]
                      flex flex-wrap
                      "
          >
            <div className="inline-block leading-[65px]">
              <span>
                As the economic depression deepened in the early 30s, and as
                farmers had less and less money to spend in town, banks began to
                fail at
              </span>
              <DroppableContainerPara
                elements={elements["1"]}
                prefix={"1"}
              />
              <span>
                rates. During the 20s, there was an average of 70 banks failing
                each year nationally. After the crash during the first 10 months
                of 1930, 744 banks closed down _ 10 times as many. In all, 9,000
                banks failed during the
              </span>
              {/* <DroppableContainerPara
                elements={elements["2"]}
                correct={correct}
                prefix={"2"}
              /> */}
            </div>
          </div>

          <DroppableContainer
            elements={elements["source"]}
            prefix={"source"}
          />

        </div>
      </DragDropContext>
    </div>
  );
}

const fakeElement = [
  { 1: "time" },
  { 2: "disappear" },
  { 3: "decade" },
  { 4: "rising" },
  { 5: "alarming" },
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

// const testData = [
//   {
//     index: 1,
//     passages: [
//       "Having worked as a literacy tutor with teenagers, Ms. Bocking saw the need for good attitudes towards reading to be formed early on-with the help of more male role models.",
//       "A University of Canberra student has launched the nation’s first father- led literacy project, to encourage fathers to become more involved in their children’s literacy.",
//       "“There’s no program like this in Australia,” Ms. Bocking said, who devised the project as the final component of her community education degree at the University.",
//       "Julia Bocking’s Literacy and Dads (LADS) project aims to increase the number of fathers participating as literacy helpers in K-2 school reading programs at Queanbeyan Primary Schools.",
//     ],
//     correct: "1320",
//   },
//   {
//     index: 2,
//     passages: [
//       "“There’s no program like this in Australia,” Ms. Bocking said, who devised the project as the final component of her community education degree at the University.",
//       "A University of Canberra student has launched the nation’s first father- led literacy project, to encourage fathers to become more involved in their children’s literacy.",
//       "Having worked as a literacy tutor with teenagers, Ms. Bocking saw the need for good attitudes towards reading to be formed early on-with the help of more male role models.",
//       "Julia Bocking’s Literacy and Dads (LADS) project aims to increase the number of fathers participating as literacy helpers in K-2 school reading programs at Queanbeyan Primary Schools.",
//     ],
//     correct: "1320",
//   },
//   {
//     index: 3,
//     passages: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
//     correct: "1320",
//   },
// ];
