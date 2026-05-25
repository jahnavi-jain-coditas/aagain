import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import About from "../Components/About/About";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Contact from "../Components/Contact/Contact";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard";
import UserDashboard from "../Components/UserDashboard/UserDasboard";
import ScheduleExams from "../Components/ManageExamsPage/ManageExamsPage";
import ManageUser from "../Components/ManageUser/ManageUser";
import ManageExamsPage from "../Components/ManageExamsPage/ManageExamsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
    
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
  },
  {
    path:"/ManageExam",
    element:<ManageExamsPage/>

  },
  {
    path:"/ManageUser",
    element:<ManageUser/>
  }
]);
export default router;