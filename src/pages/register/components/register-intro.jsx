import React from 'react'

import { Link } from 'react-router-dom'
import { FiUser, FiBriefcase } from 'react-icons/fi'

import { employerImage } from '@assets/images/_index'

export default function RegisterIntro () {
  return (
    <section className="h-screen font-poppins">
      <div className="flex flex-row justify-center items-center">
        <div className="hidden lg:block lg:w-1/2 h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${employerImage})` }}>
          <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"></div>
          <div className="absolute top-2/3 transform -translate-y-1/2 left-0">
            <p className="text-white text-3xl relative px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-screen p-6 flex flex-col items-center justify-center">
            <Link to="/" className="text-center block text-gray-900 font-semibold text-3xl md:text-3xl lg:text-4xl mb-2">Shield</Link>
            <p className="text-gray-900 text-base lg:text-lg font-medium">Register in to Shield</p>
            <div className="flex w-full px-4 md:px-10 lg:px-20 mt-4">
              <Link to="/employer" className="w-1/2 px-2 group">
                <div className="h-48 bg-white items-center flex flex-col justify-center rounded-md  group-hover:bg-blue-50 border-gray-200 group-hover:border-blue-500 border-solid border-2 duration-200 ease-linear">
                  <div className="group-hover:bg-blue-500 p-3 rounded-md duration-200 ease-linear">
                    <FiUser className="text-3xl md:text-4xl lg:text-5xl stroke-blue-500 group-hover:stroke-white duration-200 ease-linear"/>
                  </div>
                  <p className="group-hover:text-blue-600 duration-200 ease-linear font-medium text-base lg:text-lg mt-2">Employer</p>
                </div>
              </Link>
              <Link to="/employer" className="w-1/2 px-2 group">
                <div className="h-48 bg-white items-center flex flex-col justify-center rounded-md  group-hover:bg-blue-50 border-gray-200 group-hover:border-blue-500 border-solid border-2 duration-200 ease-linear">
                  <div className="group-hover:bg-blue-500 p-3 rounded-md duration-200 ease-linear">
                    <FiBriefcase className="text-3xl md:text-4xl lg:text-5xl stroke-blue-500 group-hover:stroke-white duration-200 ease-linear"/>
                  </div>
                  <p className="group-hover:text-blue-600 duration-200 ease-linear font-medium text-base lg:text-lg mt-2">Employer</p>
                </div>
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
