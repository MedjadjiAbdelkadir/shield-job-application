import React from 'react'

import Head from '@components/head'
import MainLayout from '@layouts/main-layout'
import Header from '@components/header'

export default function Home () {
  return (
    <>
      <Head>
        <title>Home | Shield</title>
      </Head>
      <Header />
      <MainLayout>
        {/* <h1 className="text-xl">Home Page</h1> */}
      </MainLayout>
    </>
  )
}
