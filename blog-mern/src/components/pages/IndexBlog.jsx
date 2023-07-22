import React from 'react'
import { Link } from 'react-router-dom'

export const IndexBlog = () => {
  return (
    <div className='jumbo'>
      
      <h1>Welcome to the blog with REACT</h1>
      <h2>Blog develop with MEARN stack, (MondoDB, Express, React, NodeJs)</h2>
      <p>MERN Blog is an exciting web application built on the powerful MERN technology stack (MongoDB, Express, React, Node.js). This platform allows you to immerse yourself in the world of writing, giving you the freedom to share your thoughts, experiences and knowledge through personalized blog posts.

<h2>Outstanding Features:</h2>

<h3>Creating Custom Posts:</h3> With MERN Blog, you can write your own posts with a simple and attractive user interface. Personalize your posts with headings, paragraphs and multimedia content to capture the attention of your readers.

<h3>Easy editing and deletion:</h3> Do you want to improve or delete your publication? No problem. MERN Blog allows you to edit your existing posts to ensure you always display the most up-to-date content or delete them if you no longer want them.

<h3>Post Management:</h3> Keep your blog organized with the post management feature. View all your entries in an ordered list and quickly access the one you want to edit or delete.

Search: Quickly find posts using the search feature in the sidebar.</p>
      <Link to="/articles" className='button'>See the articles</Link>
    </div>
  )
}
