import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logoFamir2.png";
/* import axios from "axios";
import { API } from "../config/config"; */
/* import { useUsuario } from "../auth/UsuarioProvider";
import { Usuario } from "../interfaces/Usuario"; */
import { MdOutlineFastfood } from 'react-icons/md';
import { IoMdGlasses } from 'react-icons/io';
import { GiRunningShoe, GiNoodles, GiMedicinePills, GiNecklaceDisplay } from 'react-icons/gi';
/* import auth from "../auth/auth";
const initialState: Usuario = {
  id_usuario: "",
  nombre: "",
  id_pais_residencia: "AF",
  id_pais_nacimiento: "AF",
  apellido: "",
  profesion: "",
  correo: "",
  telefono: "",
  habilitado_u: 1,
  rut: "",
  id_rango: 2,
  url_foto_usuario: "",
  url_foto_residencia: "",
  url_foto_nacimiento: "",
  authenticate: false,
}; */
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
    <aside className="main-sidebar position-fixed sidebar-dark-primary bg-dark elevation-4 h-100">
      {/* Brand Logo */}
      <Link to="#" className="nav-link text-white d-lg-none d-block" data-widget="pushmenu" role="button">
        <i className="fas fa-bars" />
      </Link>
      <Link to="/" className="brand-link">
        {/* <img src={logo} alt="Famir Centro Logo" className="brand-image elevation-3" style={{ opacity: ".8" }} /> */}
        <span className="brand-text font-weight-light ms-3">Menu</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-vertical-hidden os-host-scrollbar-horizontal-hidden os-host-transition">
        <div className="os-resize-observer-host observed">
          <div className="os-resize-observer" style={{ left: 0, right: "auto" }} />
        </div>
        <div className="os-size-auto-observer observed" style={{ height: "calc(100% + 1px)", float: "left" }}>
          <div className="os-resize-observer" />
        </div>
        <div className="os-content-glue" style={{ margin: "0px -8px" }} />
        <div className="os-padding">
          <div className="os-viewport os-viewport-native-scrollbook-invisible">
            <div className="os-content" style={{ padding: "0px 8px", height: "100%", width: "100%" }}>
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="user-container d-flex">
                  <div className="user-icon my-2 text-center">
                    <i className="fas fa-user" />
                  </div>
                  <h5 className="my-2">Administrador</h5>
                </div>
                {/* <div className="info">
                  <Link to="/Perfil" className="d-block">
                    {usuario.nombre} {usuario.apellido}
                  </Link>
                </div> */}
              </div>
              {/* Sidebar Menu */}
              <nav className="mt-2 h-100">
                <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent h-50 overflow-auto flex-nowrap" data-widget="treeview" role="menu" data-accordion="false">
                  <li className="nav-item my-2">
                    <Link to="/Dashboard" className="nav-link">
                      <i className="nav-icon fas fa-home " />
                      <p>Inicio</p>
                    </Link>
                  </li>
                  <li onClick={abrir1} ref={(node) => (ref1.current = node)} className="nav-item my-2">
                    <Link to="/Dashboard/ManejoProductos" className="nav-link">
                      <i className="nav-icon fas fa-weight-hanging" />
                      <p>
                        Productos
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul ref={(node) => (ref3.current = node)} className="nav nav-treeview d-none overflow-auto" style={{ maxHeight: "8rem" }}>
                      <li className="nav-item ">
                        <Link to="#" className="nav-link">
                          <MdOutlineFastfood className="icon-dash" />
                          <p>Descartables</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <IoMdGlasses className="icon-dash" />
                          <p>Moda</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <GiRunningShoe className="icon-dash" />
                          <p>Calzado</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <GiNoodles className="icon-dash" />
                          <p>Alimentos</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <GiMedicinePills className="icon-dash" />
                          <p>Salud y bienestar</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <GiNecklaceDisplay className="icon-dash" />
                          <p>Joyería</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item my-2">
                    <Link to="/Dashboard/Marketing" className="nav-link">
                      <i className="nav-icon fas fa-bullhorn" />
                      <p>Marketing</p>
                    </Link>
                  </li>
                  <li onClick={abrir2} ref={(node) => (ref2.current = node)} className="nav-item mb-5">
                    <Link to="#" className="nav-link my-2">
                      <i className="nav-icon fas fa-chart-bar" />
                      <p>
                        Estadisticas
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul ref={(node) => (ref4.current = node)} className="nav nav-treeview d-none">
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
                  {/* <li className="nav-item my-2">
                    <Link onClick={() => logOut()} to="#" className="nav-link">
                      <i className="nav-icon fas fa-door-open" />
                      <p>Cerrar Sesión</p>
                    </Link>
                  </li> */}
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
      </div >
      {/* /.sidebar */}
    </aside >
  );
};

export default Aside;
