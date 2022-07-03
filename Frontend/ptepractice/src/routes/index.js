
//Layout
import {HeaderOnlyLayout} from "../components/Layout/";

//Pages
import {
    ToDoList,
    TwoWayBinding,
    TwoWayBindingRadio,
    TwoWayBindingCheckBox,
    FirstUseEffect,
    RealtimeTitle
  } from "../pages/DOMEvents";

import Signin from "../pages/Signin";


const publicRoutes = [
    {path: '', component: TwoWayBinding},
    {path: '/news', component: FirstUseEffect},
    {path: '/contact', component: RealtimeTitle},
    {path: '/signin', component: Signin, layout:HeaderOnlyLayout}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }