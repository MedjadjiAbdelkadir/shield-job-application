import React from 'react'

import { Outlet } from 'react-router-dom'

import Head from '@components/head'
import { Layout } from './components/_index'

export default function Profile () {
  return (
    <>
      <Head>
        <title>Profile | Shield</title>
      </Head>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}
