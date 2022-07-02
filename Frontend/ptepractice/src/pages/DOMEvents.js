import React from "react";

function TestButton({ title, href, onClick }) {
  let Component = "button";

  const props = {};

  if (href) {
    Component = "a";
    props.href = href;
  }

  if (onClick) {
    props.onClick = onClick;
  }

  console.log({ ...props });
  console.log(props);

  return <Component {...props}>{title}</Component>;
}

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

  return (
    <React.Fragment>
      <input value={name} onChange={(e) => handleNameChange(e.target.value)} />

      <button onClick={(e) => handleNameChange("New Name")}>Change Name</button>
    </React.Fragment>
  );
}

function TwoWayBindingRadio() {
  const data = [
    {
      id: 1,
      name: "html",
    },
    {
      id: 2,
      name: "Java",
    },
    {
      id: 3,
      name: "css",
    },
    {
      id: 4,
      name: "Spring Boot",
    },
  ];

  const [choice, setChoice] = React.useState(3);

  const handleChoice = (id) => {
    setChoice(id);
  };

  console.log(choice);
  return (
    <div>
      {data.map((course) => (
        <div key={course.id}>
          <input
            id={course.name}
            type="radio"
            checked={choice === course.id}
            onChange={() => handleChoice(course.id)}
          />
          <label htmlFor={course.name}>{course.name}</label>
        </div>
      ))}
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = React.useState(1);

  const handleIncrease = () => {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };

  const handleDecrease = () => {
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
  };

  return (
    <React.Fragment>
      <button onClick={handleDecrease}>-</button>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>+</button>
    </React.Fragment>
  );
}

function TwoWayBindingCheckBox() {
  const data = [
    {
      id: 1,
      name: "html",
    },
    {
      id: 2,
      name: "Java",
    },
    {
      id: 3,
      name: "css",
    },
    {
      id: 4,
      name: "Spring Boot",
    },
  ];

  const [choiceList, setChoiceList] = React.useState([]);

  const handleChoice = (id) => {
    if (choiceList.includes(id)) {
      console.log("in the list already");
      setChoiceList((prev) => {
        return prev.filter((item) => item !== id);
      });
    } else {
      setChoiceList((prev) => {
        return [...prev, id];
      });
    }
  };

  console.log(choiceList);
  return (
    <div>
      {data.map((course) => (
        <div key={course.id}>
          <input
            id={course.name}
            type="checkbox"
            checked={choiceList.includes(course.id)}
            onChange={() => handleChoice(course.id)}
          />
          <label htmlFor={course.name}>{course.name}</label>
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
  TestButton,
  Form,
  TwoWayBinding,
  TwoWayBindingRadio,
  TwoWayBindingCheckBox,
  ToDoList,
  FirstUseEffect,
  RealtimeTitle
};

