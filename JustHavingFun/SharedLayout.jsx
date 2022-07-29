import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export const SharedLayout = () => {
  return (
    <div>
        <Outlet/>
        <Nav/>
    </div>
  )
}
