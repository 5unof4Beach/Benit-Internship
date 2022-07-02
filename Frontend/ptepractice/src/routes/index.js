import {
    ToDoList,
    TwoWayBinding,
    TwoWayBindingRadio,
    TwoWayBindingCheckBox,
    FirstUseEffect,
    RealtimeTitle
  } from "../pages/DOMEvents";


const publicRoutes = [
    {path: '', component: TwoWayBinding},
    {path: '/news', component: FirstUseEffect},
    {path: '/contact', component: RealtimeTitle}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }