import { useState } from 'react'
import { Create } from './components/pages/Create'
import { Articles } from './components/pages/Articles'
import { IndexBlog } from './components/pages/IndexBlog'
import { RoutesBlog } from './routing/RoutesBlog'


function App() {
  

  return (
    
      <div className='layout'>
          <RoutesBlog/>

      </div>

  )
}

export default App
