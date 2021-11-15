import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContenedorDashboard } from "../../../components/ContenedorDashboard/ContenedorDashboard";
import { ContenidoDashboard } from "../../../components/ContenedorDashboard/ContenidoDashboard";
import { HeaderDashboard } from "../../../components/ContenedorDashboard/HeaderDashboard";
import { configScrollReveal } from "../../../config/config";
import DashboardLayout from "../../../partials/LayoutDash";
import ScrollReveal from "scrollreveal";
export const ProductosDash: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    //Para los efectos de aparicion
    ScrollReveal().reveal(".show", configScrollReveal);
    return () => {};
  }, []);
  return (
    <DashboardLayout>
      <main className="show">
        <ContenedorDashboard>
          {/* Cabecera */}
          <HeaderDashboard titulo={"Productos"}>
            {/* Breadcrumbs */}
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <Link to="/">Inicio</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </HeaderDashboard>

          {/* Contenido */}
          <ContenidoDashboard></ContenidoDashboard>
        </ContenedorDashboard>
      </main>
    </DashboardLayout>
  );
};
