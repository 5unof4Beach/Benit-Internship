import QuestionList from "./components/QuestionList/QuestionList";
import { useState, useEffect } from "react";
import Loading from "../../../components/Loading/Loading";

function ReadingQuestionPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((res) => {
        setIsLoading(!isLoading);
        setData(res);
      });
  }, []);

  return (
    <div
      className="
            
                w-[70%] min-w-[1000px]
                flex justify-items-center
            "
    >
      {isLoading ? (
        <Loading />
      ) : (
        <QuestionList data={data ?? []}></QuestionList>
      )}
    </div>
  );
}

const getData = () => {
  const URL = "http://localhost:8080/api/reading/sa";

  let options = {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      'Content-Type': "application/json",
    }),
  };

  return fetch(URL, options);
};

export default ReadingQuestionPage;
