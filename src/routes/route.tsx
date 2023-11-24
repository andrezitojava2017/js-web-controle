import { createBrowserRouter } from "react-router-dom";
import Login from "../page/login/login";
import Departament from "../page/departament/departament";
import Request from "../page/request/request";
import Order from "../page/order/order";
import Secretariat from "../page/secretariat/secretariat";
import Home from "../page/home/home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "new/departament",
    element: <Departament />,
  },
  {
    path: "new/secretaria",
    element: <Secretariat />,
  },
  {
    path: "order",
    element: <Order />,
  },
]);
