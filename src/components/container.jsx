import React from 'react'

import PropTypes from 'prop-types'

export default function Container ({ children }) {
  return (
    <div className="container mx-auto h-full relative max-w-6xl px-4 md:px-6 lg:px-8 xl:px-12">{children}</div>
  )
}

Container.propTypes = {
  maxW: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
