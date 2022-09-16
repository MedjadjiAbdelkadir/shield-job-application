import React, { Suspense } from 'react'

import { BrowserRouter, useRoutes } from 'react-router-dom'

import { Overview, Security, Settings, InterestingJobs } from '@pages/profile/components/_index'
// lazy load imports of all app pages
const Home = React.lazy(() => import('@pages/home/page'))
const Login = React.lazy(() => import('@pages/login/page'))
const Register = React.lazy(() => import('@pages/register/page'))
const Jobs = React.lazy(() => import('@pages/jobs/page'))
const Profile = React.lazy(() => import('@pages/profile/page'))
const Job = React.lazy(() => import('@pages/job/page'))

const appRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'jobs',
    element: <Jobs />
  },
  {
    element: <Profile />,
    children: [
      {
        path: 'profile',
        element: <Overview />
      },
      {
        path: 'profile/security',
        element: <Security />
      },
      {
        path: 'profile/settings',
        element: <Settings />
      },
      {
        path: 'profile/interested-jobs',
        element: <InterestingJobs />
      }
    ]
  },
  {
    path: 'jobs/:id',
    element: <Job />
  },
  {
    path: '*',
    element: <div className="flex justify-center bg-gray-50 items-center h-screen text-7xl font-semibold text-gray-900">404</div>
  }
]
const AppRoutes = () => {
  return useRoutes(appRoutes)
}

export default function Navigation () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
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
