import { Routes, Route } from "react-router-dom";
import Login from "../page/login/login";
import Departament from "../page/departament/departament";
import Request from "../page/request/request";
import Order from "../page/order/order";
import Secretariat from "../page/secretariat/secretariat";
import Home from "../page/home/home";

export const RouteJs = () => {
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/novo/departamento" element={<Departament />} />
      <Route path="/novo/secretaria" element={<Secretariat />} />
      <Route path="/novo/solicitacao" element={<Request />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};
