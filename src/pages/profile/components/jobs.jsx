import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const jobsList = [
  {
    title: 'frontend developer',
    company: 'Shield',
    location: 'New York',
    type: 'full time'
  },
  {
    title: 'frontend developer',
    company: 'Shield',
    location: 'New York',
    type: 'full time'
  },
  {
    title: 'frontend developer',
    company: 'Shield',
    location: 'New York',
    type: 'full time'
  },
  {
    title: 'frontend developer',
    company: 'Shield',
    location: 'New York',
    type: 'full time'
  },
  {
    title: 'frontend developer',
    company: 'Shield',
    location: 'New York',
    type: 'full time'
  },
  {
    title: 'backend developer',
    company: 'Shield',
    location: 'New York',
    type: 'full time'
  }
]

export default function Jobs () {
  return (
    <section className="px-6">
      <h2 className="text-2xl text-gray-900 font-semibold pt-3 pb-4">Interesting Jobs</h2>
      <div className="p-6 bg-white border-gray-100 border-2 border-solid rounded-sm">
        <div className='flex flex-col gap-4 lg:px-4 divide-y divide-gray-200'>
          {
            jobsList.map((job, index) => (
              <JobCard key={index} {...job} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

const JobCard = ({ title, company, location, type }) => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-lg text-blue-500 font-medium capitalize"><Link to="/jobs/id">{title}
        <span className="pl-1 text-sm text-gray-700">(09/04/2022)</span>
        </Link></h2>
        <p className="text-blue-500 bg-blue-50 rounded-sm p-2 capitalize">{type}</p>
      </div>
      <h3 className="text-md text-gray-900">{company + ', ' + location}</h3>
      <p className="mt-2 text-gray-900">Experienced : Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum fuga aut necessitatibus recusandae.</p>
    </div>
  )
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
