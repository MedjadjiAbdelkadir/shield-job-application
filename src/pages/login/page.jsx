import React from 'react'

import Head from '@components/head'
import { LoginForm } from './blocks/_index'

export default function Login () {
  return (
    <>
      <Head>
        <title>Login | Shield</title>
      </Head>
      <main>
        <LoginForm />
      </main>
    </>
  )
}
