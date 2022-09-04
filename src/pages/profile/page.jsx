import React from 'react'

import Head from '@components/head'
import { Layout, Overview, Settings, Jobs, Security } from './components/_index'

export default function Profile () {
  return (
    <>
      <Head>
        <title>Profile | Shield</title>
      </Head>
      <Layout>
        {/* <Overview /> */}
        {/* <Settings /> */}
        <Security />
        {/* <Jobs /> */}
      </Layout>
    </>
  )
}
