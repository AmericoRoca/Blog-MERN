import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBlog = () => {
  return (
    <nav className="nav">
    <ul>
        <li><NavLink to="/index">Inicio</NavLink></li>
        <li><NavLink to="/articles">Artículos</NavLink></li>
        <li><NavLink to="/create">Crear Artículo</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
    </ul>
</nav>
  )
}
