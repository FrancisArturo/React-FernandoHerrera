import React from 'react'
import { Navbar } from './ui'
import { Outlet } from 'react-router-dom'

export const HeroesApp = () => {
  return (
    <>
        <Navbar />
        <div id="detail">
            <Outlet />
        </div>
    </>
  )
}
