import React from "react";
import { Route } from "react-router-dom";
import Aside from "./Aside";
import NavbarDash from "./NavbarDash";
interface PrivateRouteProps {
  element: any;
  path: string;
}
const DashboardLayout: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <NavbarDash />
      <Aside />
      {children}
    </>
  );
};
const LayoutDash = (props: PrivateRouteProps) => {
  const { element: Component, path, ...rest } = props;
  return (
    <Route
      {...rest}
      element={
        <DashboardLayout>
          <Component />
        </DashboardLayout>
      }
    />
  );
};

export default LayoutDash;
