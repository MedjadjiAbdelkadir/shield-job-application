import React from 'react'

import PropTypes from 'prop-types'

import { Container } from '@components/_index'
import { Navbar, Footer } from '@components/blocks/_index'
import { Header, Aside } from '@pages/jobs/blocks/_index'

export default function SecondLayout ({ jobTitle, children }) {
  return (
    <div className="font-poppins">
      <Navbar withBg={true} />
      <Header jobTitle={jobTitle} />
      <div className="bg-gray-50 mb-6">
        <Container extraClasses="py-4 flex">
          <Aside />
          <main className="relative w-full lg:w-9/12">
            {children}
          </main>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

SecondLayout.propTypes = {
  children: PropTypes.node.isRequired,
  jobTitle: PropTypes.string.isRequired
}
