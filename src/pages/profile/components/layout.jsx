import React from 'react'

import PropTypes from 'prop-types'

import { Aside, Navbar } from './_index'

export default function Layout ({ children }) {
  return (
    <div className="font-poppins bg-gray-50">
      <Navbar />
      <div className="flex pt-16 min-h-screen">
        <Aside />
        <main className="w-full lg:w-9/12 xl:w-10/12 px-3 py-3 h-full">
          {children}
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
