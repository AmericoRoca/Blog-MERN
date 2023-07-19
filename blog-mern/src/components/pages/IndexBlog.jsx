import React from 'react'
import { Link } from 'react-router-dom'

export const IndexBlog = () => {
  return (
    <div className='jumbo'>
      <h1>Welcome to the blog with REACT</h1>
      <p>Blog develop with MEARN stack</p>
      <Link to="/articles" className='button'>See the articles</Link>
    </div>
  )
}
