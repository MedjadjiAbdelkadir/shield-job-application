import React from 'react'

import PropTypes from 'prop-types'

import { Container } from '@components/_index'
import { Navbar, Footer } from '@components/blocks/_index'
import RelatedJobs from './related-jobs'

export default function Layout ({ children }) {
  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <Navbar withBg={true} />
      <div className="bg-gray-50 flex-grow">
        <Container extraClasses="py-4 flex gap-4 relative">
          <main className="relative w-full lg:w-8/12">
            {children}
          </main>
          <RelatedJobs />
        </Container>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
