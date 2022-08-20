import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Login } from '@pages/_index'

const routes = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default function Routing () {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}
