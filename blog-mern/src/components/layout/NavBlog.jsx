import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBlog = () => {
  return (
    <nav className="nav">
    <ul>
        <li><NavLink to="/index">Index</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        <li><NavLink to="/create">Blog</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
    </ul>
</nav>
  )
}
