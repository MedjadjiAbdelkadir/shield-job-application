import React from 'react'

import PropTypes from 'prop-types'

import Navbar from '@components/blocks/navbar'

export default function MainLayout ({ children }) {
  return (
    <div className="font-poppins">
      <Navbar extraClasses="absolute" />
      <main>
        {children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}
