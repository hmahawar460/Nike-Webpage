import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite'
import { createHashRouter, RouterProvider } from "react-router-dom"
import './index.css'

import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Model3D from './components/Model3D.jsx'
import Github, { githubLaoder } from './components/Github.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'user/:userid', element: <User /> },
      { path: 'github', element: <Github />, loader: githubLaoder },
      { path: '3d-model', element: <Model3D /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
