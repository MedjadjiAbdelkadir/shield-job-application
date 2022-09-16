import React from 'react'

import Head from '@components/head'
import { Layout, JobOverview, JobDetails, JobSkills, JobDescription, JobRequirements } from './components/_index'

export default function Job () {
  return (
    <>
      <Head>
        <title>Single Job | Shield</title>
      </Head>
      <Layout>
        <JobOverview />
        <JobDetails />
        <JobSkills />
        <JobDescription />
        <JobRequirements />
      </Layout>
    </>
  )
}
