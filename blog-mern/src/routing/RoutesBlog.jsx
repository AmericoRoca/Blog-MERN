import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { IndexBlog } from '../components/pages/IndexBlog'
import { Create } from '../components/pages/Create'
import { Article } from '../components/pages/Article'
import { Articles } from '../components/pages/Articles'
import { Edit } from '../components/pages/Edit'
import { SearchBar } from '../components/pages/SearchBar'
import { Header } from '../components/layout/Header'
import { NavBlog } from '../components/layout/NavBlog'
import { Aside } from '../components/layout/Aside'
import { Footer } from '../components/layout/Footer'
import { Contact } from '../components/pages/Contact'

export const RoutesBlog = () => {
  return (
    <BrowserRouter>
        {/* LAYOUT */}
        <Header/>
        <NavBlog/>

        {/* CONTENT */}
        <section id='content' className='content'>
        <Routes>
            <Route path='/' element={<IndexBlog/>}></Route>
            <Route path='/index' element={<IndexBlog/>}></Route>
            <Route path='/articles' element={<Articles/>}></Route>
            <Route path='/article/:id' element={<Article/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/edit/:id' element={<Edit/>}></Route>
            <Route path='/search/:busqueda' element={<SearchBar/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='*' element={
              <div className='jumbo'>
                <h1>Error 404</h1>
              </div>
            }></Route>
        </Routes>
        </section>

        {/* ASIDE */}
        <Aside/>


        {/* FOOTER */}
        <Footer/>
    
    </BrowserRouter>
  )
}
