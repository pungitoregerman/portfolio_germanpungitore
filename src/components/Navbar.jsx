import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Germán Pungitore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <NavLink className="nav-link active text-white" aria-current="page" to="#">Educación</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active text-white" to="#">Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active text-white" to="#">Proyectos</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
