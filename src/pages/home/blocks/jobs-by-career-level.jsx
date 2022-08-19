import React from 'react'

import PropTypes from 'prop-types'

import { Container } from '@components/_index'

const careerLevels = [
  {
    title: 'Entry Level'
  },
  {
    title: 'Mid Level'
  },
  {
    title: 'Senior Level'
  },
  {
    title: 'Executive Level'
  },
  {
    title: 'Director Level'
  }
]

export default function JobsByCareerLevel () {
  return (
    <section className="py-16">
      <Container >
        <h2 className="font-semibold text-4xl text-gray-900 mb-8">Browse Jobs by Career Level</h2>
        <ul className="flex flex-wrap">
          {
            careerLevels.map(({ title }) => <JobByCareerLevel title={title} key={title} />)
          }
        </ul>
      </Container>
    </section>
  )
}

const JobByCareerLevel = ({ title }) => {
  return (
    <li className="w-1/5 h-56 px-1">
      <div className="bg-gray-100 relative">
        <img src="https://wuzzuf.net/images/HomepageImages/management-jobs.webp" alt="" srcSet="" />
        <h3 className="absolute bottom-4 left-3 text-white z-20">{title}</h3>
        <div className="absolute bottom-0 left-0 w-full h-14 bg-black bg-opacity-50"></div>
      </div>
    </li>
  )
}

JobByCareerLevel.propTypes = {
  title: PropTypes.string.isRequired
}
