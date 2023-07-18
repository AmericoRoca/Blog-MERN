import { useState } from 'react'
import { Create } from './components/pages/Create'
import { Articles } from './components/pages/Articles'
import { Index} from './components/pages/Index'

function App() {
  

  return (
    
      <div className='App'>
          <h1>Blog with MERN</h1>

          <Index/>
          <Articles />
          <Create />
          
      </div>

  )
}

export default App
