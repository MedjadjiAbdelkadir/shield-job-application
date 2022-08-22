import React from 'react'

import PropTypes from 'prop-types'

import { Container } from '@components/_index'
import Navbar from '@components/blocks/navbar'
import { Header, Aside } from '@pages/jobs/blocks/_index'

export default function SecondLayout ({ jobTitle, children }) {
  return (
    <div className="font-poppins">
      <Navbar withBg={true} />
      <Header jobTitle={jobTitle} />
      <div className='bg-gray-50'>
        <Container extraClasses='flex py-4'>
          <Aside />
          <main className="min-h-screen w-9/12">
            {children}
          </main>
        </Container>
      </div>
    </div>
  )
}

SecondLayout.propTypes = {
  children: PropTypes.node.isRequired,
  jobTitle: PropTypes.string.isRequired
}
