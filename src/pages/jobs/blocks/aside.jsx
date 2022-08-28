import React from 'react'

export default function Aside () {
  return (
    <aside className="sticky top-4 h-screen z-20 w-4/12">
      <div className="bg-white py-2 border-2 border-gray-100 border-solid rounded-sm min-h-full">
        <h2 className="text-gray-900 text-2xl font-medium pb-2 mb-2 border-b-2 border-solid border-gray-100 px-3">Filters</h2>
        <div className="flex flex-col gap-2 py-1 px-3">
          <label htmlFor="type" className="text-gray-900 font-medium text-md capitalize">Career Level</label>
          <select id="type" className="py-1.5 px-2 bg-gray-50 rounded-md text-md border-2 border-solid border-gray-100 w-full">
            <option value="">Career Level</option>
            <option value="">Frontend</option>
            <option value="">Backend</option>
            <option value="">Fullstack</option>
            <option value="">DevOps</option>
            <option value="">QA</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 py-1 px-3">
          <label htmlFor="type" className="text-gray-900 font-medium text-md capitalize">Years of experience</label>
          <select id="type" className="py-1.5 px-2 bg-gray-50 rounded-md text-md border-2 border-solid border-gray-100 w-full">
            <option value="">Career Level</option>
            <option value="">Frontend</option>
            <option value="">Backend</option>
            <option value="">Fullstack</option>
            <option value="">DevOps</option>
            <option value="">QA</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 py-1 px-3">
          <label htmlFor="type" className="text-gray-900 font-medium text-md capitalize">City</label>
          <select id="type" className="py-1.5 px-2 bg-gray-50 rounded-md text-md border-2 border-solid border-gray-100 w-full">
            <option value="">City</option>
            <option value="">Frontend</option>
            <option value="">Backend</option>
            <option value="">Fullstack</option>
            <option value="">DevOps</option>
            <option value="">QA</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 py-1 px-3">
          <label htmlFor="type" className="text-gray-900 font-medium text-md capitalize">Date Posted</label>
          <select id="type" className="py-1.5 px-2 bg-gray-50 rounded-md text-md border-2 border-solid border-gray-100 w-full">
            <option value="">Date Posted</option>
            <option value="">Frontend</option>
            <option value="">Backend</option>
            <option value="">Fullstack</option>
            <option value="">DevOps</option>
            <option value="">QA</option>
          </select>
        </div>
        </div>
        <div>
      </div>
    </aside>
  )
}
