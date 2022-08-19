import React from 'react'

import Head from '@components/head'
import MainLayout from '@layouts/main-layout'
import { Header, LatestJobs, GetReady, JobsByCareerLevel, JobsByLocation } from './blocks/_index'
import { Footer } from '@components/blocks/_index'

export default function Home () {
  return (
    <>
      <Head>
        <title>Home | Shield</title>
      </Head>
      <Header />
      <MainLayout>
        <LatestJobs />
        <GetReady />
        <JobsByCareerLevel />
        <JobsByLocation />
      </MainLayout>
      <Footer />
    </>
  )
}
