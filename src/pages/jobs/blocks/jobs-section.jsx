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
    title: 'frontend developer',
    company: 'Shield',
    location: 'New York',
    type: 'full time'
  }
]

export default function JobsSection () {
  return (
    <section className='flex flex-col gap-4 px-4'>
      <SearchCard />
      {
        jobsList.map((job, index) => (<JobCard key={index} {...job} />))
      }
    </section>
  )
}

const JobCard = ({ title, company, location, type }) => {
  return (
    <div className="bg-white px-5 py-5 border-2 border-gray-100 border-solid">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl text-blue-600 font-medium capitalize"><Link to="/jobs/id">{title}</Link></h2>
        <p className="bg-blue-500 rounded-sm text-white p-2">{type}</p>
      </div>
      <h3 className="text-md text-gray-900">{company + ', ' + location}</h3>
      <p className="mt-2 text-gray-900">Experienced : Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum fuga aut necessitatibus recusandae.</p>
    </div>
  )
}

const SearchCard = () => {
  return (
    <div className="bg-white px-5 py-5 border-2 border-gray-100 border-solid">
      <div className="relative">
        <input type="text" placeholder='search' className="py-2 px-3 w-full bg-gray-50 rounded-md text-lg border-2 border-solid border-gray-100" />
        <button className="py-3 px-3 bg-blue-600 text-white absolute top-0 right-0 rounded-sm">Search</button>
      </div>
      <div className="flex justify-between mt-3">
        <Link to="/" className="text-blue-600 text-sm">Back to all jobs</Link>
        <p className="text-gray-700 text-sm"><b>34</b> jobs found</p>
      </div>
    </div>
  )
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
