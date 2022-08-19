import React from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Container } from '@components/_index'

const jobsLocation = [
  {
    loction: 'Jobs in Algiers'
  },
  {
    loction: 'Jobs in Constantine'
  },
  {
    loction: 'Jobs in Oran'
  },
  {
    loction: 'Jobs in Tlemcen'
  },
  {
    loction: 'Jobs in Tizi Ouzou'
  },
  {
    loction: 'Jobs in Tlemcen'
  },
  {
    loction: 'Jobs in Chlef'
  },
  {
    loction: 'Jobs in Algiers'
  },
  {
    loction: 'Jobs in Constantine'
  },
  {
    loction: 'Jobs in Oran'
  },
  {
    loction: 'Jobs in Tlemcen'
  },
  {
    loction: 'Jobs in Tizi Ouzou'
  },
  {
    loction: 'Jobs in Tlemcen'
  },
  {
    loction: 'Jobs in Chlef'
  }
]

export default function JobsByLocation () {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="font-semibold text-4xl text-gray-900 mb-8">Browse Jobs by Location</h2>
        <ul className="grid grid-flow-rows grid-cols-4 gap-4">
          {
            jobsLocation.map(({ loction }) => <JobByLocation loction={loction} key={loction} />)
          }
        </ul>
      </Container>
    </section>
  )
}

const JobByLocation = ({ loction }) => {
  return (
    <li className="">
        <Link to="#" className="text-blue-500 font-medium">{loction}</Link>
    </li>
  )
}

JobByLocation.propTypes = {
  loction: PropTypes.string.isRequired
}
