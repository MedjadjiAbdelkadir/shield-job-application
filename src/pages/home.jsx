import React from 'react'

import Head from '@components/head'
import MainLayout from '@layouts/main-layout'

export default function Home () {
  return (
    <>
      <Head>
        <title>Home | Shield</title>
      </Head>
      <MainLayout>
        <h1 className="text-5xl">Home Page</h1>
      </MainLayout>
    </>
  )
}
