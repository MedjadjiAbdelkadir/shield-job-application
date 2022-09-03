import React from 'react'

import { Routes, Route, Outlet } from 'react-router-dom'

import Head from '@components/head'
import { Layout, Overview, Settings, Jobs } from './components/_index'

export default function Profile () {
  // const { pathname } = useLocation()
  // console.log('pathname: ', pathname)
  return (
    <>
      <Head>
        <title>Profile | Shield</title>
      </Head>
      <Layout>
        <Routes>
          <Route path="/profile" element={<Overview />}>
            <Route path="settings" element={<Settings />} />
            <Route path="interested-jobs" element={<Jobs />} />
          </Route>
        </Routes>
        <Outlet />
      </Layout>
    </>
  )
}
