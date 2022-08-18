import React from 'react'

import PropTypes from 'prop-types'

const latestJobs = [
  {
    title: 'Customer Service Officer',
    postedBy: 'John Doe'
  },
  {
    title: 'Customer Service Officer',
    postedBy: 'John Doe'
  },
  {
    title: 'Customer Service Officer',
    postedBy: 'John Doe'
  },
  {
    title: 'Customer Service Officer',
    postedBy: 'John Doe'
  },
  {
    title: 'Customer Service Officer',
    postedBy: 'John Doe'
  },
  {
    title: 'Customer Service Officer',
    postedBy: 'John Doe'
  },
  {
    title: 'Customer Service Officer',
    postedBy: 'John Doe'
  }
]

export default function LatestJobs () {
  return (
    <section className="py-16">
        <div className="container mx-auto max-w-6xl">
            <h2 className="font-semibold text-4xl text-gray-900 mb-4">Latest jobs</h2>
            <ul className="flex flex-wrap">
              {
                latestJobs.map(job => <Job job={job} key={job.title} />)
              }
            </ul>
        </div>
    </section>
  )
}

const Job = ({ job }) => {
  return (
    <li className="flex flex-col w-1/4 p-1">
      <div className="flex-1 px-6 py-6 border-2 border-solid border-gray-200 rounded-sm">
          <h3 className="text-lg font-medium text-blue-500 truncate">
            <a href="#">{job.title}</a>
          </h3>
          <p className="text-gray-600 text-md">
            {job.postedBy}
          </p>
          <p className="text-xs text-gray-500">1 hour ago</p>
      </div>
    </li>
  )
}

Job.propTypes = {
  job: PropTypes.object.isRequired
}
