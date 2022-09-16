import React from 'react'

import Head from '@components/head'
import { RegisterIntro } from './components/_index'

export default function Register () {
  return (
    <>
      <Head>
        <title>Register | Shield</title>
      </Head>
      <main>
        <RegisterIntro />
      </main>
    </>
  )
}
