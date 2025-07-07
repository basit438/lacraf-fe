import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import RegisterUser from './Pages/RegisterUser'
import LoginUser from './Pages/LoginUser'
function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/register-user",
          element : <RegisterUser/>
        },
        {
          path : "/login-user",
          element : <LoginUser/>
        }
      ]
    }
  ]);


  return (
    <>
      <RouterProvider router={router}/>
      </>
  )
}

export default App
