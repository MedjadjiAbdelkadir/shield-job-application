import React from 'react'

export default function JobDetails () {
  return (
    <section className="w-full bg-white border-2 border-gray-100 border-solid py-5 px-5 my-1">
      <h2 className="text-2xl text-gray-900 mb-2">Job Details</h2>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2">
          <h3 className="font-semibold text-gray-900">Experience Needed: </h3>
          <p className="font-medium text-gray-800">More than 3 years</p>
        </li>
        <li className="flex gap-2">
          <h3 className="font-semibold text-gray-900">Experience Needed: </h3>
          <p className="font-medium text-gray-800">More than 3 years</p>
        </li>
        <li className="flex gap-2">
          <h3 className="font-semibold text-gray-900">Experience Needed: </h3>
          <p className="font-medium text-gray-800">More than 3 years</p>
        </li>
      </ul>
    </section>
  )
}
