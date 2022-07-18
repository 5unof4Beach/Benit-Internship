import { useState, useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import DragList from "./components/DragDrop/DragList";
import Guide from "../components/Guide";
import Navigator from "../components/Navigator/Navigator";
import AnswerButton from "../components/AnswerButton/AnswerButton";
import { ShowAnswerContext } from "../../../Helper/Context";

function ReadingFillInBlankPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(mockData);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

//   useEffect(() => {
//     getData()
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         setIsLoading(false);
//         setData(res);
//         // console.log(res)
//       });
//   }, []);

  useEffect(() => {
    setShowAnswer(false);
  }, [questionNumber]);

  return (
    <ShowAnswerContext.Provider value={{ showAnswer }}>
      <div
        className="
                    w-[70%] min-w-[700px]
                    flex flex-col items-center
                "
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Guide
              leadingIndex={questionNumber + 1}
              guidePassage="In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text."
            />
            <DragList>{data[questionNumber]}</DragList>
            <div
              className="
                    w-full flex justify-between items-center
                "
            >
              <AnswerButton setShowAnswer={setShowAnswer} />
              <Navigator
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                numberOfQuestion={data.length}
              />
            </div>
          </>
        )}
      </div>
    </ShowAnswerContext.Provider>
  );
}

const getData = () => {
  const URL = "http://localhost:8080/api/reading/pr";

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(URL, options);
};

export default ReadingFillInBlankPage;

const mockData = [
  {
    index: 1,
    segments: [
      "Volcanoes blast more than 100 million tons of carbon dioxide into the atmosphere every year but the gas is usually",
      ". When a volcano erupts, carbon dioxide spreads out into the atmosphere and isnt",
      "in one spot. But sometimes the gas gets trapped",
      "under enormous pressure. If it escapes to the surface in a dense",
      ", it can push out oxygen-rich air and become deadly.",
    ],
    answers: [
      "cloudy",
      "focused",
      "concentrated",
      "dangerous",
      "harmless",
      "underground",
      "test",
    ],
    correct:'2513'
  },

  {
    index: 2,
    segments: [
      "Science works by making observations, coming up with theories to explain the observations, and then attempting to disprove these theories by",
      ". Once a scientist has done these things, he can present his",
      ". After a while, many scientists working all around the world, using large amount of data, build up a",
      "of the way the world is.",
    ],
    answers: [
      "assunption",
      "experiment",
      "hypothesis",
      "data",
      "results",
      "picture",
    ],
    correct:'124'
  },

  {
    index: 3,
    segments: [
      "Paragraph 1",
      "Paragraph 2",
      "Paragraph 3",
      "Paragraph 4",
      "Paragraph 5",
      "Paragraph 6",
      "Paragraph 7",
      "Paragraph 8",
      "Paragraph 9",
      "Paragraph 10",
    ],
    answers: [
      "ans 1",
      "ans 2",
      "ans 3",
      "ans 4",
      "ans 5",
      "ans 6",
      "ans 6",
    ],
    correct:'076583421'
  },
];
