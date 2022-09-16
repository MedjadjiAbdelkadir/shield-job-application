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
    <section className="py-10 md:py-16">
      <Container >
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-8">Browse Jobs by Career Level</h2>
        <ul className="flex flex-wrap flex-col gap-2 md:gap-0 md:flex-row">
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
    <li className="w-full md:w-1/2 lg:w-1/5 h-56 md:h-56 px-1 py-2 overflow-hidden">
      <div className="h-56 relative group">
        <img src="https://wuzzuf.net/images/HomepageImages/management-jobs.webp" className="md:w-full md:h-full" alt="" srcSet="" />
        <h3 className="absolute bottom-3 left-3 text-white z-20">{title}</h3>
        <div className="absolute bottom-0 left-0 w-full group-hover:from-black group-hover:h-full h-28 md:h-16 bg-gradient-to-t from-black"></div>
      </div>
    </li>
  )
}

JobByCareerLevel.propTypes = {
  title: PropTypes.string.isRequired
}
