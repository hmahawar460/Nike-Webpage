import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import 'flowbite';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx';
import Model3D from './components/Model3D.jsx';
import Github, { githubLaoder } from './components/Github.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children: [
      { path: '', element: <Home/> },
      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/> },
      { path: 'user/:userid', element: <User/> },
      { path: 'github', element: <Github/>, loader: githubLaoder },
      { path: '3d-model', element: <Model3D/> }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/' element = {<App />}>
//       <Route path = '' element = {<Home />}/>
//       <Route path = 'about' element = {<About />}/>
//       <Route path = 'contact' element = {<Contact />}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
