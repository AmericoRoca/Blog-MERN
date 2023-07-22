import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



export const Footer = () => {
  return (
    <footer className="footer">
        &copy; Created with <FontAwesomeIcon icon={faHeart} beat style={{color: "#ff0026",}} /> by <a href='https://www.americoroca.com' target='blank'>americoroca.com</a> Follow me on:
        <a href="https://github.com/AmericoRoca" target='blank'><FontAwesomeIcon icon={faGithub} className='social-icons'/></a>
        <a href="https://www.linkedin.com/in/americochiclana/"><FontAwesomeIcon icon={faLinkedin} className='social-icons'/></a>
    </footer>
  )
}
