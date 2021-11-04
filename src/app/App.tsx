import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "../auth/UsuarioProvider";

import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

// Layout
import LayoutDash from "../partials/LayoutDash";
import LayoutUsuario from "../partials/LayoutUsuario";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Vistas */}
        {/* <LayoutDash element={<Login />} path="/" /> */}
        {/* <LayoutUsuario element={<Login />} path="/" /> */}
        <Route element={<Login />} path="/Iniciar" />
        <Route element={<Register />} path="/Registrarse" />
        {/* Dashboard */}
        <Route element={<NotFound />} />
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
