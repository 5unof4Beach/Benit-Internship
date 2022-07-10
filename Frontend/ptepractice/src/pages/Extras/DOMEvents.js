import React from "react";
import { CheckIcon, ClearIcon } from "../../icons/Icons/Icons";



const Form = {
  Input({ testValue, ...inputProps }) {
    return (
      <React.Fragment>
        <input {...inputProps} />
        <p>{testValue}</p>
      </React.Fragment>
    );
  },

  Checkbox() {
    return <input type="checkbox" />;
  },
};


function TwoWayBinding() {
  const [name, setName] = React.useState("");

  const handleNameChange = (input) => {
    setName(input);
  };

  console.log(name);

  return (false &&
    <React.Fragment>
      <input 
        className="border-black border-[2px]"
        value={name} 
        onChange={(e) => handleNameChange(e.target.value)} 
      />

      <button 
        className = 'text-3xl font-bold '
        onClick={(e) => handleNameChange("New Name")}
      >
        Change Name
      </button>
    </React.Fragment>
  );
}

function TwoWayBindingRadio({children,correctAnswer, showAnswer, ...props}) {
  const data = children
  console.log(correctAnswer)

  const [choice, setChoice] = React.useState();

  const handleChoice = (id) => {
    setChoice(id);
  };

  console.log(choice);
  return (
    <div className="">
      {data.map((answer, index) => (
        <div key={index} className='flex'>
          {showAnswer&&(index==correctAnswer?<ClearIcon/>:<CheckIcon/>)}
          <input
            className="h-full"
            id={index}
            type="radio"
            checked={choice === index}
            onChange={() => handleChoice(index)}
          />
          <label 
            className="ml-[10px] font-normal text-[18px]"
            htmlFor={index}>{answer}</label>
        </div>
      ))}
    </div>
  );
}


function ToDoList() {
  const [toDos, setToDos] = React.useState([]);
  const [chore, setChore] = React.useState("");

  const handleAddChore = () => {
    setToDos((prev) => {
      if (chore !== "") return [...prev, chore];
      return prev;
    });
    setChore((prev) => "");
  };

  const handleEnteringChore = (input) => {
    setChore((prev) => input);
  };

  return (
    <div>
      <input
        type="text"
        onInput={(e) => handleEnteringChore(e.target.value)}
        value={chore}
      />

      <button onClick={() => handleAddChore()}>add</button>

      <ul>
        {toDos.map((chore, index) => {
          return <li key={index}>{chore}</li>;
        })}
      </ul>
    </div>
  );
}

function FirstUseEffect() {
  const [source, setSource] = React.useState('posts');
  const [content, setContent] = React.useState([])

  React.useEffect(() => {
    console.log(source);
    fetch(`https://jsonplaceholder.typicode.com/${source}`)
      .then((response) => response.json())
      .then((json) => setContent(json));
  }, [source]);

  return (
    <div>
      <button onClick={() => setSource("posts")}>Post</button>
      <button onClick={() => setSource("users")}>User</button>
      <button onClick={() => setSource("comments")}>Comment</button>
      {content.map((item, index) => {
          return <p key={index}>{JSON.stringify(item)}</p>
      })}
    </div>
  );
}

function RealtimeTitle(){

    const [title, setTitle] = React.useState('title')

    const handleChange = (newTitle) => {
        setTitle((prev) => newTitle)
    }

    React.useEffect(() => {
        window.document.title = title
        console.log("title changed")
    }, [title])

    return (
        <div>
            <input
                type='text'
                onInput={(e) => handleChange(e.target.value)}
            />

            
        </div>
    )
}

export {
  Form,
  TwoWayBinding,
  TwoWayBindingRadio,
  ToDoList,
  FirstUseEffect,
  RealtimeTitle
};

