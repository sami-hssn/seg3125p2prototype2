import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SamplesPage from './pages/SamplesPage';
import CollaboratePage from './pages/CollaboratePage';
import TutorialsPage from './pages/TutorialsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/projects",
    element: <ProjectsPage/>,
  },
  {
    path: "/samples",
    element: <SamplesPage/>,
  },
  {
    path: "/collaborate",
    element: <CollaboratePage/>,
  },
  {
    path: "/tutorials",
    element: <TutorialsPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
