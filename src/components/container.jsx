import React from 'react'

import PropTypes from 'prop-types'

export default function Container ({ extraClasses, children }) {
  return (
    <div className={`container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 xl:px-12 ${extraClasses}`}>{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  extraClasses: PropTypes.string
}
