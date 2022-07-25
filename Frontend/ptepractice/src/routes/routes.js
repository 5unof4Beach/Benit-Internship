
//Layout
import {HeaderOnlyLayout} from "../components/Layout/";

//Pages
import { FirstUseEffect, RealtimeTitle, } from "../pages/Extras/DOMEvents";

import SignupPage from "../pages/Signup/SignupPage";
import Signin from "../pages/Signin";
import GoogleSignin from "../pages/Signin/GoogleSignin";
import Signout from "../pages/Signout";
import Reading from "../pages/Reading";
import ReadingQuestionPage from "../pages/Reading/ReadingQuestion/ReadingQuestionPage";
import ReadingReorderPage from "../pages/Reading/ReadingReorder/ReadingReorderPage";
import ReadingFillInBlankPage from "../pages/Reading/ReadingFillInBlank/ReadingFillInBlankPage";
import Loading from "../components/Loading/Loading";


const publicRoutes = [
    {path: '/', component: Loading},
    {path: '/news', component: FirstUseEffect},
    {path: '/contact', component: RealtimeTitle},
    {path: '/signin', component: Signin, layout:HeaderOnlyLayout},
    {path: '/signup', component: SignupPage, layout:HeaderOnlyLayout},
    {path: '/signout', component: Signout, layout: HeaderOnlyLayout},
    {path: '/signin/googlesignin', component: GoogleSignin, layout: HeaderOnlyLayout},
    {path: '/reading', component: Reading},
    {path: '/reading_reorder_paragraph', component: ReadingReorderPage, layout:HeaderOnlyLayout},
    {path: '/reading_fillin_blank', component: ReadingFillInBlankPage, layout:HeaderOnlyLayout},
  ]
  
  const privateRoutes = [
    {path: '/question_bank', component: ReadingQuestionPage, layout:HeaderOnlyLayout},
    
]

export { publicRoutes, privateRoutes }