import React from 'react'

import PropTypes from 'prop-types'

export default function MainLayout ({ children }) {
  return (
    <div className="font-poppins">{children}</div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}
