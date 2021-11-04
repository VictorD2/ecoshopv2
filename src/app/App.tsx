import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { UsuarioProvider } from "../auth/UsuarioProvider";

import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
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
