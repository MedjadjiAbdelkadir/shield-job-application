import React from 'react'

import { Formik } from 'formik'
import PropTypes from 'prop-types'

export default function Form ({ initialValues, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log('values:', values)
      }}
    >
      {children}
    </Formik>
  )
}

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  // handelSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}
