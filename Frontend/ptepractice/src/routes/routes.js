
//Layout
import {HeaderOnlyLayout} from "../components/Layout/";

//Pages
import {
    TwoWayBinding,
    FirstUseEffect,
    RealtimeTitle,
    TwoWayBindingRadio
  } from "../pages/Extras/DOMEvents";

import Signin from "../pages/Signin";
import GoogleSignin from "../pages/Signin/GoogleSignin";
import Signout from "../pages/Signout";
import Reading from "../pages/Reading";
import ReadingQuestionPage from "../pages/ReadingQuestion/ReadingQuestionPage";


const publicRoutes = [
    {path: '/', component: TwoWayBindingRadio},
    {path: '/news', component: FirstUseEffect},
    {path: '/contact', component: RealtimeTitle},
    {path: '/signin', component: Signin, layout:HeaderOnlyLayout},
    {path: '/signout', component: Signout, layout: HeaderOnlyLayout},
    {path: '/signin/googlesignin', component: GoogleSignin, layout: HeaderOnlyLayout},
    {path: '/reading', component: Reading},
  ]
  
  const privateRoutes = [
  {path: '/question_bank', component: ReadingQuestionPage, layout:HeaderOnlyLayout}

]

export { publicRoutes, privateRoutes }