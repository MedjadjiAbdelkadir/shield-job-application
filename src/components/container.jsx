import React from 'react'

import PropTypes from 'prop-types'

export default function Container ({ maxW, children }) {
  const classesList = `container mx-auto h-full relative max-w-${maxW}`
  return (
    <div className={classesList}>{children}</div>
  )
}

Container.propTypes = {
  maxW: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
