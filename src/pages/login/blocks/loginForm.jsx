import React from 'react'

import { Link } from 'react-router-dom'
import { Form } from 'formik'
import * as yup from 'yup'

import MyForm from '@components/forms/form'
import Input from '@components/forms/fields/input'

const initialValues = { email: '', password: '' }
const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required')
})

export default function LoginForm () {
  return (
    <section className="bg-gray-50 h-screen font-poppins">
      <div className="flex flex-col justify-center items-center h-full">
        <Link to="/" className='text-center text-gray-900 font-semibold text-3xl md:text-4xl lg:text-5xl mb-5'>Shield</Link>
        <div className="bg-white p-6 shadow-lg w-11/12 sm:w-8/12 md:4/5 lg:w-2/5">
          <MyForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log('values:', values)
            }}
          >
            {
              () => {
                return (
                  <Form>
                    <Input label="email" name="email" type="email" placeholder="exmple@gmail.com"/>
                    <Input label="password" name="password" type="password" placeholder="password"/>
                    <button className="bg-blue-500 hover:bg-blue-700 duration-200 ease-linear text-white px-6 py-2.5 rounded-sm font-medium w-full mt-2">Signin</button>
                  </Form>
                )
              }
            }
          </MyForm>
          <p className="text-center text-gray-900 py-2.5 capitalize">don&apos;t have account? <Link to="/register" className="text-blue-600 font-medium">Register</Link></p>
        </div>
      </div>
    </section>
  )
}
