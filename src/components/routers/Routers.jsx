import React from 'react'
import Home from '../pages/Home'
import Layout from '../layout/Layout'
import { Routes, Route } from 'react-router-dom'

function Routers() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Routers
