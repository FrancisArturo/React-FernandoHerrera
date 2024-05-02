import React from 'react'
import {  Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <>
        <NavBar />
        <hr />
        <div id="detail">
            <Outlet />
        </div>
    </>
    
  )
}

