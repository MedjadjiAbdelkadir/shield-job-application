import React from 'react'

export default function Overview () {
  return (
  <section className="px-2">
    <h2 className="text-2xl text-gray-900 font-semibold pt-3 pb-4">Account Overview</h2>
    <div className="p-6 bg-white border-gray-100 border-2 border-solid rounded-sm">
      {/* profile image with name */}
      <div className="flex items-center gap-2">
        <div className="h-28 w-28 bg-gray-100 rounded-sm"></div>
        <div>
          <h3 className="text-xl font-medium text-gray-900 capitalize mb-3">meziane khalil</h3>
          <div className="flex justify-between mb-2">
            <p className='text-gray-600 font-medium text-md'>Profile Completion</p>
            <p className='text-gray-900 text-md font-medium pl-6'>50%</p>
          </div>
          <div className="bg-gray-200 h-2 rounded-md">
            <div className="w-1/2 h-2 bg-blue-500 rounded-md"></div>
          </div>
        </div>
      </div>
      {/* details data */}
      <h3 className="text-gray-900 text-xl font-medium my-4">Profile Details</h3>
      <div className="grid grid-flow-row grid-cols-2 gap-3 justify-items-start w-3/5">
        <p className="text-gray-600 font-medium text-md">Full Name</p>
        <p className="text-gray-900 text-md font-medium">Meziane Khalil</p>
        <p className="text-gray-600 font-medium text-md">Contact Phone </p>
        <p className="text-gray-900 text-md font-medium">0656873213</p>
        <p className="text-gray-600 font-medium text-md">Birth Date</p>
        <p className="text-gray-900 text-md font-medium">10/01/2000</p>
        <p className="text-gray-600 font-medium text-md">Email Address</p>
        <p className="text-gray-900 text-md font-medium">meziane@gmail.com</p>
        <p className="text-gray-600 font-medium text-md">Address</p>
        <p className="text-gray-900 text-md font-medium">city cherif,Boukadir chlef</p>
      </div>
    </div>
  </section>
  )
}
