import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import About from "../Components/About/About";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Contact from "../Components/Contact/Contact";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard";
import UserDashboard from "../Components/UserDashboard/UserDasboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
    // element:<AdminDashboard/>
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>


  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/AdminDashboard",
    element:<AdminDashboard/>
  },
  {
    path:"/UserDashboard",
    element:<UserDashboard/>
  }
]);
export default router;