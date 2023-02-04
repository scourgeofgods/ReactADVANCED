import React from 'react'
import { VscMenu } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './../context'

const Navbar = () => {
  const { show, setShow } = useGlobalContext()
  return (
    <nav className="navbar navbar-expand-lg shadow-lg">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <h4>Navbar Logo</h4>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setShow(!show)}
        >
          <VscMenu />
        </button>

        <div
          className={`${
            show ? 'navbar-collapse show collapse' : 'navbar-collapse collapse'
          }`}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
