import React, { Suspense } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('@pages/home/page'))
const Login = React.lazy(() => import('@pages/login/page'))
const Register = React.lazy(() => import('@pages/register/page'))
const Jobs = React.lazy(() => import('@pages/jobs/page'))
const Profile = React.lazy(() => import('@pages/profile/page'))

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
            <Route key={path} path={path} element={<Suspense fallback={<Loading/>}>
              {element}
            </Suspense>} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

function Loading () {
  return (
    <div className="flex justify-center bg-gray-50 items-center h-screen text-7xl font-semibold text-gray-900">
      <p>Loading...</p>
    </div>
  )
}
