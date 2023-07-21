import React from 'react'
import { Link } from 'react-router-dom'

export const IndexBlog = () => {
  return (
    <div className='jumbo'>
      
      <h1>Welcome to the blog with REACT</h1>
      <h2>Blog develop with MEARN stack, (MondoDB, Express, React, NodeJs)</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum dolores explicabo dolorem corporis cum beatae deserunt! Sint, enim iusto optio, quod quae suscipit vero accusantium est aut id error.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis necessitatibus perferendis dolorem, est consequatur ipsum nesciunt, corporis similique nam aperiam id saepe esse enim. Delectus, quos harum. Non, impedit repellat.</p>
      <Link to="/articles" className='button'>See the articles</Link>
    </div>
  )
}
