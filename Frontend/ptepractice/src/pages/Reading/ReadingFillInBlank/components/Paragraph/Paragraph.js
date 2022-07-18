import React from "react";
import DroppableContainerPara from "../DragDrop/DroppableContainerPara";

function Paragraph({ children, correct, elements }) {
  return (
    <div
      className="
                      w-[70%] min-h-[300px]
                      border-[1px] border-black rounded-t-[6px] p-[10px]
                      flex flex-wrap
                      "
    >
      <div className="inline-block leading-[70px]">
        {children.map((segment, index) => {
          if (index === children.length - 1) 
          return <span key={index}>{segment}</span>;

          return (
            <React.Fragment key={index} >
              <span>{segment}</span>
              <DroppableContainerPara 
                elements={elements[(index + 1).toString()]}
                prefix={(index + 1).toString()}
                correctAnswer={correct[index]}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Paragraph;
