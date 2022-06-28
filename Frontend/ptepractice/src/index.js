import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

function Description() {
  return (
    <div>
      <h3>Day la mieu ta</h3>
      <p>Mieu ta Mieu ta Mieu ta Mieu ta Mieu ta Mieu ta Mieu ta</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Duc Bui 1
        </a>
      </header>
      <Description></Description>

      <YoutubeItem thumb = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2022/01/11135302/labrador-retriever-vs-golden-retriever-.png"
      foot = "https://zoipet.com/wp-content/uploads/2020/03/cho-labrador.jpg"></YoutubeItem>
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      {/* Youtube Items */}
      <div className="youtube-image">
        <img src={props.thumb} alt="dog" />
      </div>

      <div className="youtube-footer">
        <img src={props.foot} alt="" />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  App()
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
