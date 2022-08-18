import React from 'react'

import { headerImage } from '@assets/images/_index.js'

export default function Header () {
  return (
    <header className="h-screen bg-blue-600 relative bg-center bg-cover font-poppins" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <div className="container mx-auto max-w-5xl h-full relative">
            <div className="flex justify-between items-center h-full">
                <div className="w-3/4">
                    <h1 className="text-white text-6xl font-medium capitalize mb-5">find thousands of jobs that match your passion</h1>
                    <p className="text-gray-50 text-lg mb-4">Search and find your dream job is now easier than ever you just browse and find job if you need it</p>
                    <div className="relative">
                        <input type="text" placeholder="search jobs (ex: frontend dev)" className="py-4 px-4 text-lg bg-white rounded w-full" />
                        <button className="bg-blue-600 text-white rounded font-medium py-3 px-4 absolute right-2 top-1/2 transform -translate-y-1/2">Search Jobs</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
