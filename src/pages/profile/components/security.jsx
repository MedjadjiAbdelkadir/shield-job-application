import React from 'react'

export default function Security () {
  return (
    <section className="px-6">
      <h2 className="text-2xl text-gray-900 font-semibold pt-3 pb-4">Account Security</h2>
      <div className="p-6 bg-white border-gray-100 border-2 border-solid rounded-sm divide-y divide-gray-200">
        <div className="flex justify-between items-center pb-4">
          <div>
            <h3 className="text-gray-900 font-medium mb-1">Email Address</h3>
            <p className="text-gray-700 text-md">khalil@gmail.com</p>
          </div>
          <button className="text-gray-600 bg-gray-100 font-medium py-2 px-4 rounded-sm capitalize">change email</button>
        </div>
        <div className="flex justify-between items-center pt-4">
          <div>
            <h3 className="text-gray-900 font-medium mb-1">Password</h3>
            <p className="text-gray-700 text-md">**********</p>
          </div>
          <button className="text-gray-600 bg-gray-100 font-medium py-2 px-4 rounded-sm capitalize">Reset Password</button>
        </div>
      </div>
    </section>
  )
}
