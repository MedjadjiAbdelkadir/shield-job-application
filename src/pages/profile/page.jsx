import React from 'react'

import { Routes, Route } from 'react-router-dom'

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
          <Route path="/profile" exact element={<Overview />} />
          <Route path="/profile/settings" element={<Settings />} />
          <Route path="/profile/interested-jobs" element={<Jobs />} />
        </Routes>
      </Layout>
    </>
  )
}
