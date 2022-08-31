import React from 'react'

import PropTypes from 'prop-types'

import Aside from './aside'
import Navbar from './navbar'

export default function Layout ({ children }) {
  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex pt-16">
        <Aside />
        <main className="w-full lg:w-10/12 px-3 py-3">
          {children}
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
