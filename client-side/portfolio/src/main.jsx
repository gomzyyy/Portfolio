import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.jsx'
import Home from './components/home/home.jsx'
import Journey from './components/journey/journey.jsx'
import Skills from './components/skills/skills.jsx'
import Blogs from './components/blogs/blogs.jsx'
import Contact from './components/contact/contact.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index />}>
      <Route index element={<Home/> } />
      <Route path='/journey' element={<Journey/> } />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/blogs' element={<Blogs/> } />
      <Route path='/contact' element={<Contact/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
