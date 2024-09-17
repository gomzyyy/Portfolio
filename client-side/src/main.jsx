import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.jsx'
import Home from './components/home/home.jsx'
import Journey from './components/journey/journey.jsx'
import Skills from './components/skills/skills.jsx'
import Contact from './components/contact/contact.jsx'
import SubmitionPage from './components/contact/submission-page.jsx'
import { ChatLogin, ChatRoom } from './components/public room/context-room.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index />}>
      <Route index element={<Home/> } />
      <Route path='/journey' element={<Journey/> } />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/public/login' element={<ChatLogin/> } />
      <Route path='/public/chat' element={<ChatRoom/> } />
      <Route path='/contact' element={<Contact/>}/>
      <Route exact path='/contact/submition' element={<SubmitionPage/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
