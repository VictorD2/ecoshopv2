import React from "react";
import { Route } from "react-router-dom";

// Componentes
import Footer from "./Footer";
import NavBar from "./NavBar";

interface PrivateRouteProps {
  element: any;
  path: string;
}
const UsuarioLayout: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
const LayoutUsuario: React.FC<PrivateRouteProps> = (props) => {
  const { element: Component, path, ...rest } = props;
  return (
    <Route
      {...rest}
      element={
        <UsuarioLayout>
          <Component/>
        </UsuarioLayout>
      }
    />
  );
};

export default LayoutUsuario;
