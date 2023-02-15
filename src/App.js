import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import React, { useEffect, useState } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader'

import DashBoard from "./DashBoard";
import Question from "./components/Question.js";
import Authentication from "./authentication/Authentication";
import { RecoilRoot, useRecoilState } from "recoil";
import Profile from "./components/Profile";
import Menu from "./components/Menu";




const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <>
        <DashBoard />
      </>
    ),
  },
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/test",
    element: <Question />,
  },
  {
    path: "/profile",
    element: <><Menu /><Profile /></>,
  },
]);




function App() {

  const [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false);
  }, 1000)
}, [])

  return (


    <>
      {loading ? (
        <div style={{
              
         
          marginTop:"18%",
          display:"flex",
          justifyContent:"space-around"
        }}>
          <PacmanLoader
            color={"#50C878"}
            loading={loading}
            size={60}
            // cssOverride={
            //   // "justify-content: center;"
            // }
            
          />

        </div>

      ) :
        (<RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>)}
  </>)



}

export default App;
