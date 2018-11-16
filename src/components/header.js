import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
      <nav className="navigation">
        <div className="row">
          <ul className="col s4 offset-s4">
            <li >
              <Link
              to="/projects"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
              >
                Projects
            </Link>
            </li>
            <li >
              <Link
                className="active"
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                About me
              </Link>
            </li>
            <li >
              <Link
              className="active"
              to="/contact"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Contact
            </Link></li>
          </ul>
        </div>
      </nav>
)

export default Header
