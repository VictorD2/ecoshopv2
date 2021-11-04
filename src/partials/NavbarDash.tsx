import React from 'react'
import { Link } from 'react-router-dom'
import { GoSignOut } from 'react-icons/go'

const NavbarDash: React.FC = () => {

  /* const logOut = async () => {
    const res = await axios.get(`${API}/logout`);
    if (res.data.success) {
      auth.logOut();
      auth.setRango(1);
      setUsuario(initialState);
      history.push("/");
    }
  }; */

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light d-flex justify-content-between">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="#" className="nav-link" data-widget="pushmenu" role="button">
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
        </li>
      </ul>
      <Link to="#" className="d-flex align-items-center pe-3 text-dark">
        <GoSignOut className="fs-4" />
        <p className="mb-1 ms-1 fs-5">Salir</p>
      </Link>
    </nav>
  )
}

export default NavbarDash
