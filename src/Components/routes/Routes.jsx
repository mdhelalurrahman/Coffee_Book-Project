import {createBrowserRouter} from "react-router";
import App from "../../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Coffee from "../Pages/Coffee";

import CoffeCard from "../CoffeCard";
import Dasborad from "../Pages/Dasborad";
import CoffeeDetails from "../Pages/CoffeeDetails";
import Error from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`../categories.json`),
        children: [
          {
            path: "/",
            element: <CoffeCard></CoffeCard>,
            loader: () => fetch(`../coffees.json`),
          },
          {
            path: "/categories/:categoriesId",
            element: <CoffeCard></CoffeCard>,
            loader: () => fetch(`../coffees.json`),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffee />,
        loader: () => fetch(`../coffees.json`),
      },
      {
        path: "/dashboard",
        element: <Dasborad></Dasborad>,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch(`../coffees.json`),
      },
    ],
  },
]);

export default router;
