import React from 'react'

import PropTypes from 'prop-types'

import { Container } from '@components/_index'

export default function Header ({ jobTitle }) {
  return (
    <header className="mt-16 py-3 bg-blue-700">
      <Container>
        <h1 className="text-2xl font-medium text-white">{jobTitle} in Algeria</h1>
      </Container>
    </header>
  )
}

Header.propTypes = {
  jobTitle: PropTypes.string.isRequired
}
