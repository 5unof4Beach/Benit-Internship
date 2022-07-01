import React from "react";
import {TestButton, Form} from './DOMEvents';
import { Gift } from "./RandomGift";
import {ToDoList,TwoWayBinding, TwoWayBindingRadio, TwoWayBindingCheckBox} from "./DOMEvents";


function YoutubeItem( {props} ) {
  console.log(props)
  return (
    <div className="youtube-item">
      {/* Youtube Items */}
      <div className="youtube-image">
        <img src={props.thumb} alt="dog" />
      </div>

      <div className="youtube-footer">
        <img src={props.foot} alt="dog pic" />
      </div>
    </div>
  );
}

function Counter(){
  const [counter, setCounter] = React.useState(1)

  const handleIncrease = () => {
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
  }

  const handleDecrease = () => {
    setCounter(counter => counter-1)
    setCounter(counter => counter-1)
    setCounter(counter => counter-1)
  }

  return(
    <React.Fragment>
      <button onClick={handleDecrease}>-</button>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>+</button>
    </React.Fragment>
  )
}

function App() {
  return (
    <div className="App">
      {/* <TwoWayBinding></TwoWayBinding> */}
      {/* <TwoWayBindingRadio></TwoWayBindingRadio> */}
      {/* <TwoWayBindingCheckBox></TwoWayBindingCheckBox> */}
      {/* <Counter></Counter> */}
      <ToDoList></ToDoList>
    </div>
  );
}



export {YoutubeItem, Counter, App}