import React from 'react'

import Head from '@components/head'
import { JobsSection, Layout } from './components/_index'

export default function Jobs () {
  return (
    <>
      <Head>
        <title>Jobs | Shield</title>
      </Head>
      <Layout jobTitle='frontend developer'>
        <JobsSection />
      </Layout>
    </>
  )
}
