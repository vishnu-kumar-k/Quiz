import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import React from "react";

import DashBoard from "./DashBoard";
import Question from "./components/Question.js";
import Authentication from "./authentication/Authentication";
import { RecoilRoot } from "recoil";
import Profile from "./components/Profile";
import Menu from "./components/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <DashBoard />
      </>
    ),
  },
  {
    path: "/auth",
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
  return <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>;
}

export default App;
