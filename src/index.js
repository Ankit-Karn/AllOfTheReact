import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/home';
import About from './page/about';
import Projects from './page/projects';
import Videos from './page/videos';
import Contact from './page/contact';
import Login from './page/login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/videos",
    element: <Videos/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
