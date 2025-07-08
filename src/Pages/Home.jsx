import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Welome to lacraf</div>
    
    <Link to={"/register-user"}>Register user</Link>
    <Link to={"/login-user"}>Login user</Link>
    <Link to={"/craft-intro"}>Register as seller</Link>
    <Link to={"/shop-details"}>Shop details</Link>
    
    </>
  )
}

export default Home