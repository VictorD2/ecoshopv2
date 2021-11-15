import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "../auth/UsuarioProvider";

// Pages
import Login from "../pages/Login/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

//Layout

import { Home } from "../pages/Home/Home";
import { Carrito } from "../pages/Carrito/Carrito";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { ProductosDash } from "../pages/Dashboard/ProductosDash/ProductosDash";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Usuarios */}
        <Route element={<Home />} path="/" />
        <Route element={<Carrito />} path="/Carrito" />
        <Route element={<NotFound />} />
        <Route element={<Login />} path="/Iniciar" />
        <Route element={<Register />} path="/Registrarse" />
        {/* Dashboard */}
        <Route element={<Dashboard />} path="/Dashboard" />
        <Route element={<ProductosDash />} path="/Dashboard/Productos/:categoria" />
        <Route element={<ProductosDash />} path="/Dashboard/Estadistica" />
        <Route element={<ProductosDash />} path="/Dashboard/Marketing" />
        <Route element={<ProductosDash />} path="/Dashboard/Pedidos" />
        <Route element={<ProductosDash />} path="/Dashboard/Empresas" />
        <Route element={<ProductosDash />} path="/Dashboard/Clientes" />
      </Routes>
    </BrowserRouter>
  );
};
const prev = () => (
  <UsuarioProvider>
    <App></App>
  </UsuarioProvider>
);
export default prev;
