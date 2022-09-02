import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Login, Register, Jobs, Profile } from '@pages/_index'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/Jobs',
    element: <Jobs />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '*',
    element: <div className="flex justify-center bg-gray-50 items-center h-screen text-7xl font-semibold text-gray-900">404</div>
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
