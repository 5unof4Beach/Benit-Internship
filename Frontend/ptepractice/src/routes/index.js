
//Layout
import {HeaderOnlyLayout} from "../components/Layout/";

//Pages
import {
    TwoWayBinding,
    FirstUseEffect,
    RealtimeTitle
  } from "../pages/Extras/DOMEvents";

import Signin from "../pages/Signin";
import GoogleSignin from "../pages/Signin/GoogleSignin";
import Signout from "../pages/Signout";


const publicRoutes = [
    {path: '', component: TwoWayBinding},
    {path: '/news', component: FirstUseEffect},
    {path: '/contact', component: RealtimeTitle},
    {path: '/signin', component: Signin, layout:HeaderOnlyLayout},
    {path: '/signout', component: Signout, layout: HeaderOnlyLayout},
    {path: '/signin/googlesignin', component: GoogleSignin, layout: HeaderOnlyLayout},
    {path: '/reading', component: RealtimeTitle}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }