import React from 'react'

import { HelmetProvider } from 'react-helmet-async'

import Navigation from '@navigation/routes'

function App () {
  return (
    <HelmetProvider>
      <Navigation />
    </HelmetProvider>
  )
}

export default App
