import React from 'react'

import { headerImage } from '@assets/images/_index.js'
import { Container } from '@components/_index'

export default function Header () {
  return (
    <header className="h-screen bg-blue-600 relative bg-center bg-cover font-poppins" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <Container>
            <div className="flex justify-between items-center h-full">
                <div className="w-full md:w-3/4">
                    <h1 className="text-white text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-medium capitalize mb-5 text-center md:text-left">find thousands of jobs that match your passion</h1>
                    <p className="text-gray-50 text-base md:text-lg mb-4 text-center md:text-left">Search and find your dream job is now easier than ever you just browse and find job if you need it</p>
                    <div className="relative">
                        <input type="text" placeholder="search jobs (ex: frontend dev)" className="py-2 md:py-4 px-2 md:px-4 text-base md:text-lg bg-white rounded w-full" />
                        <button className="bg-blue-600 text-white rounded font-medium py-3 px-4 w-full md:w-auto mt-2 md:mt-0 md:absolute md:right-1 md:top-1/2 transform md:-translate-y-1/2">Search Jobs</button>
                    </div>
                </div>
            </div>
        </Container>
    </header>
  )
}
