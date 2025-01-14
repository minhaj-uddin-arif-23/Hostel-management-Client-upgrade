import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import Blog from "../Page/Blog";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import All_Dashboards_ from "../Dashboard/All_Dashboards_";
import MyProfile from "../Dashboard/UserDashboard/MyProfile";
import RequestedMeals from "../Dashboard/UserDashboard/RequestedMeals";
import MyReviews from "../Dashboard/UserDashboard/MyReviews";
import PaymentHistory from "../Dashboard/UserDashboard/PaymentHistory";
import AddMeal from "../Admin/AddMeal";
import AdminProfile from "../Admin/AdminProfile";
import AllMeals from "../Admin/AllMeals";
import AllReviews from "../Admin/AllReviews";
import ManageUsers from "../Admin/ManageUsers";
import ServeMeals from "../Admin/ServeMeals";
import UpcomingMeals from "../Admin/UpcomingMeals";
import MealDetails from "../meal/MealDetails";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'Blog',
        element:<Blog />
      }
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/registration',
    element:<Register />
  },
  {
    path:'dashboard',
    element:<All_Dashboards_ />,
    children:[
      {
        path:"addmeals",
        element:<AddMeal />
      },
      {
        path:"adminprofile",
        element:<AdminProfile />
      },
      {
        path:"allmeals",
        element:<AllMeals />
      },
      {
        path:"allreviews",
        element:<AllReviews />
      },

      {
        path:"manageusers",
        element:<ManageUsers />
      },
      {
        path:"servemeals",
        element:<ServeMeals />
      },
      {
        path:"upcomingmeals",
        element:<UpcomingMeals />
      },
      // user related navbar
      {
        path:'myprofile',
        element:<MyProfile />,
      },
      {
        path:'requestedMeals',
        element:<RequestedMeals />,
      },
      {
        path:'myreview',
        element:<MyReviews />,
      },
      {
        path:'paymenthistory',
        element:<PaymentHistory />,
      },
    ]
  },
  {
    path:'/meal/:id',
    element:<MealDetails />,
    
  }
])