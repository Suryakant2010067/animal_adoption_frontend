import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">🐾</span>
          <span>
            PawHome
            <small>Major Project</small>
          </span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/animals">Adopt</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
        <Link to="/animals" className="btn btn-primary btn-sm">Find a Pet</Link>
      </div>
    </header>
  )
}
