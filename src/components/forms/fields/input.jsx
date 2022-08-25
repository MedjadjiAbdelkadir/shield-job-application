import React from 'react'

import { useField, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'

export default function Input (props) {
  const [field, meta] = useField(props)
  return (
    <div id={field.name}>
      <label htmlFor={field.name} className="text-gray-900 font-medium text-base md:text-lg mb-2 block capitalize">{props.label}</label>
      <input {...field} {...props} value={meta.value} className={`py-2 px-3 bg-gray-50 rounded-md text-lg border-2 border-solid border-gray-100 mb-1 w-full ${meta.touched && meta.error && 'border-red-500'}`}/>
      <ErrorMessage name={field.name} component="span" className="text-sm text-red-500"/>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired
}
