import React from 'react'

import { Form } from 'formik'
import * as yup from 'yup'

import MyForm from '@components/forms/form'
import Input from '@components/forms/fields/input'

const initialValues = { email: '', password: '' }
const validationSchema = yup.object().shape({
  username: yup.string().required('Username name is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required')
})

export default function SettingsForm () {
  return (
    <>
      <h2 className="text-gray-900 text-xl font-medium mb-3">General</h2>
      <MyForm
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {
          () => {
            return (
              <Form>
                <div className='grid grid-cols-2 gap-3'>
                  <Input label="username" name="username" type="text" placeholder="username"/>
                  <Input label="phone" name="phone" type="text" placeholder="phone"/>
                  <Input label="address" name="address" type="text" placeholder="Address"/>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 duration-200 ease-linear text-white px-6 py-2.5 rounded-sm font-medium mt-2">Save</button>
              </Form>
            )
          }
        }
      </MyForm>
    </>
  )
}
