import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.jsx'
import Home from './components/Home/home.jsx'
import Education from './components/education/education.jsx'
import Blogs from './components/blogs/blogs.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index />}>
      <Route index element={<Home/> } />
      <Route path='/education' element={<Education/> } />
      <Route path='/blogs' element={<Blogs/> } />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
