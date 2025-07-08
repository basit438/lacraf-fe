import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import RegisterUser from './Pages/RegisterUser'
import LoginUser from './Pages/LoginUser'
import CraftIntro from './Pages/sellerFlow/CraftIntro'
import ShopDetailsForm from './Pages/sellerFlow/Shopdetailsform'
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
        },
        {
          path : "/craft-intro",
          element : <CraftIntro/>
        },
        {
          path : "/shop-details",
          element : <ShopDetailsForm/>
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
