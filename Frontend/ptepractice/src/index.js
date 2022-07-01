import React from "react";
import ReactDOM from "react-dom/client";
import {YoutubeItem, Counter, App} from './App';
import { TwoWayBinding } from "./DOMEvents";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
