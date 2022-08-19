import React from 'react'

import PropTypes from 'prop-types'

export default function Container ({ children }) {
  return (
    <div className="container mx-auto h-full relative max-w-6xl">{children}</div>
  )
}

Container.propTypes = {
  maxW: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
