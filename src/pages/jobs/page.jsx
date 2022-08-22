import React from 'react'

import Head from '@components/head'
import SecondLayout from '@layouts/second-layout'
import { JobsSection } from './blocks/_index'

export default function Jobs () {
  return (
    <>
      <Head>
        <title>Jobs | Shield</title>
      </Head>
      <SecondLayout jobTitle='frontend developer'>
        <JobsSection />
      </SecondLayout>
    </>
  )
}
