import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

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

export default function JobsSection () {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 3

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(jobsList.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(jobsList.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobsList.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
    <section className='flex flex-col gap-4 px-4'>
      <SearchCard />
      {
        currentItems.map((job, index) => (<JobCard key={index} {...job} />))
      }
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex items-center gap-2 justify-center text-gray-900"
        pageClassName="text-md bg-white rounded-md w-8 h-8 flex justify-center items-center"
        activeClassName="bg-blue-600 text-white"
        previousClassName="text-gray-900 text-lg h-8 w-8 flex justify-center items-center"
        nextClassName="text-gray-900 text-lg h-8 w-8 flex justify-center items-center"
        disabledLinkClassName="text-gray-400 cursor-not-allowed"
      />
    </section>
  )
}

const JobCard = ({ title, company, location, type }) => {
  return (
    <div className="bg-white px-5 py-5 border-2 border-gray-100 border-solid">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-lg text-blue-500 font-medium capitalize"><Link to="/jobs/id">{title}</Link></h2>
        <p className="text-blue-500 bg-blue-50 rounded-sm p-2 capitalize">{type}</p>
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
