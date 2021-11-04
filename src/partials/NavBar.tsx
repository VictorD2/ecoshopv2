import React from "react";
import { Link } from "react-router-dom";
/* import Axios from "axios";
import { API } from "../config/config"; */

//Imagenes
import logo from "../images/logo.png";
// import logoResponsive from "../images/logoFamir.svg";

//Iconos

/*import { Usuario } from "../interfaces/Usuario";
import { useUsuario } from "../auth/UsuarioProvider";
import auth from "../auth/auth";

const initialState: Usuario = {
  id_usuario: "",
  nombre: "",
  id_pais_nacimiento: "AF",
  id_pais_residencia: "AF",
  apellido: "",
  profesion: "",
  correo: "",
  telefono: "",
  habilitado_u: 1,
  rut: "",
  id_rango: 2,
  url_foto_usuario: "",
  authenticate: false,
}; */
const NavBar: React.FC = () => {
  /* const { usuario, loadUser, setUsuario } = useUsuario(); */
  /* const history = useHistory(); */

  //Desconectar
  /* const logout = async () => {
    const res = await Axios.get(`${API}/logout`, { withCredentials: true });
    if (res.data.success) {
      setUsuario(initialState);
      auth.setRango(2);
      auth.logOut();
      return history.push("/"); //<- Te regresa a la pagina principal
    }
  }; */

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fondo_nav">
          <div className="container-fluid text-center">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="img-fluid w-50 ms-lg-5" alt="Logo EcoShop" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn btn_iniciar">
                    <Link className="nav-link active text-uppercase" aria-current="page" to="/Iniciar">
                      Iniciar Sesión
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
