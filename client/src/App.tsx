import "./App.css";
import { Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import NavBar from "./NavBar"
import Users from "./components/Users";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/users",
    element: <Users/>,
  },
]);

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
