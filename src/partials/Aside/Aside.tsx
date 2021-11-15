import React, { useRef } from "react";

import { Link } from "react-router-dom";
import { MdOutlineFastfood } from "react-icons/md";
import { IoMdGlasses } from "react-icons/io";
import { GiRunningShoe, GiNoodles, GiMedicinePills, GiNecklaceDisplay } from "react-icons/gi";

import "./Aside.css";
import { TiThSmall } from "react-icons/ti";

const Aside: React.FC = () => {
  /* const history = useHistory();
  const { usuario, setUsuario } = useUsuario(); */
  const ref1 = useRef<HTMLLIElement | null>();
  const ref2 = useRef<HTMLLIElement | null>();
  const ref3 = useRef<HTMLUListElement | null>();
  const ref4 = useRef<HTMLUListElement | null>();

  const abrir1 = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    if (ref1.current) ref1.current.classList.toggle("menu-is-opening");
    if (ref1.current) ref1.current.classList.toggle("menu-open");
    if (ref3.current) ref3.current.classList.toggle("d-none");
    if (ref3.current) ref3.current.classList.toggle("d-block");
  };
  const abrir2 = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    if (ref2.current) ref2.current.classList.toggle("menu-is-opening");
    if (ref2.current) ref2.current.classList.toggle("menu-open");
    if (ref4.current) ref4.current.classList.toggle("d-none");
    if (ref4.current) ref4.current.classList.toggle("d-block");
  };

  return (
    <aside className="main-sidebar position-fixed sidebar-dark-primary sidebar-no-expand bg-dark elevation-4 h-100">
      {/* Brand Logo */}
      <Link to="#" className="nav-link text-white d-lg-none d-block" data-widget="pushmenu" role="button">
        <i className="fas fa-bars" />
      </Link>
      <Link to="#" className="brand-link">
        <span className="brand-text font-weight-light ms-3">Menu</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar os-host os-theme-light os-host-resize-disabled os-host-transition os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden">
        <div className="os-resize-observer-host observed">
          <div className="os-resize-observer" style={{ left: 0, right: "auto" }} />
        </div>
        <div className="os-size-auto-observer observed" style={{ height: "calc(100% + 1px)", float: "left" }}>
          <div className="os-resize-observer" />
        </div>
        <div className="os-content-glue" style={{ margin: "0px -8px", height: "1041px", width: "249px" }} />
        <div className="os-padding">
          <div className="os-viewport os-viewport-native-scrollbook-invisible">
            <div className="os-content" style={{ padding: "0px 8px", height: "auto", width: "100%" }}>
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="user-container d-flex">
                  <div className="user-icon text-center d-flex align-items-center justify-content-center">
                    <i className="fas fa-user" />
                  </div>
                  <h5 className="my-2">Administrador</h5>
                </div>
              </div>

              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column nav-legacy nav-compact nav-flat nav-collapse-hide-child nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                  <li className="nav-item">
                    <Link to="/Dashboard" className="nav-link">
                      <i className="nav-icon fas fa-home " />
                      <p>Inicio</p>
                    </Link>
                  </li>
                  <li onClick={abrir1} ref={(node) => (ref1.current = node)} className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="nav-icon fas fa-copy" />
                      <p>
                        Productos
                        <i className="fas fa-angle-left right" />
                      </p>
                    </Link>
                    <ul ref={(node) => (ref3.current = node)} className="nav nav-treeview" style={{ display: "none" }}>
                      <li className="nav-item">
                        <Link to="/Dashboard/Productos/Todos" className="nav-link">
                          <TiThSmall className="nav-icon" />
                          <p>Todos</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <MdOutlineFastfood className="nav-icon" />
                          <p>Descartables</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <IoMdGlasses className="nav-icon" />
                          <p>Moda</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <GiRunningShoe className="nav-icon" />
                          <p>Calzado</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <GiNoodles className="nav-icon" />
                          <p>Alimentos</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <GiMedicinePills className="nav-icon" />
                          <p>Salud y bienestar</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <GiNecklaceDisplay className="nav-icon" />
                          <p>Joyería</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/Dashboard/Marketing" className="nav-link">
                      <i className="nav-icon fas fa-bullhorn" />
                      <p>Marketing</p>
                    </Link>
                  </li>
                  <li onClick={abrir2} ref={(node) => (ref2.current = node)} className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="nav-icon fas fa-chart-bar" />
                      <p>
                        Estadisticas
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul ref={(node) => (ref4.current = node)} className="nav nav-treeview" style={{ display: "none" }}>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="fas fa-book nav-icon" />
                          <p>Ranking de Empresas</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="fas fa-book nav-icon" />
                          <p>Ventas Mensuales</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/Dashboard/Pedidos" className="nav-link">
                      <i className="nav-icon fas fa-shopping-cart" />
                      <p>Pedidos</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Dashboard/Empresas" className="nav-link">
                      <i className="nav-icon fas fa-building" />
                      <p>Empresas</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Dashboard/Clientes" className="nav-link">
                      <i className="nav-icon fas fa-users" />
                      <p>Clientes</p>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{ width: "100%", transform: "translate(0px, 0px)" }} />
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{ height: "51.5844%", transform: "translate(0px, 0px)" }} />
          </div>
        </div>
        <div className="os-scrollbar-corner" />
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Aside;
