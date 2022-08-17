import React from 'react'

import PropTypes from 'prop-types'

import Navbar from '@components/navbar'

export default function MainLayout ({ children }) {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}
