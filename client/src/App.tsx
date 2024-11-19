import "./App.css";
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { ThemeProvider } from '@mui/material/styles';
import Theme from "./Themes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
