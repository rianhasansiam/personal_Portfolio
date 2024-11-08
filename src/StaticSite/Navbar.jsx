import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Navbar = props => {
  return (
    <div className="navbar bg-base-100 lg:px-[5vw] py-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ">
            <li><NavLink>Home</NavLink></li>
            <li> <NavLink>About Me</NavLink></li>
            <li><NavLink>Portfolio</NavLink></li>
            <li><NavLink>Contact</NavLink></li>

          </ul>
        </div>
        <a className="btn btn-ghost gap-0 text-5xl font-extrabold"><span className='text-orange-500'>R</span>HS <span className='text-orange-500 ml-4'>R</span>ian</a>
      </div>
      <div className="navbar-center hidden lg:flex  px-[13vw]">
        <ul className="menu menu-horizontal px-1 gap-10 font-semibold text-base ">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/aboutme" >About Me</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar