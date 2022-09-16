import React from 'react'

export default function JobOverview () {
  return (
    <section className="w-full bg-white border-2 border-gray-100 border-solid py-5 px-5 my-1">
      <h1 className="text-2xl text-gray-900 mb-2">
        Job title
        <time className="text-gray-800 text-sm inline-block ml-2 capitalize">posted 2 days ago</time>
      </h1>
      <h2 className="text-gray-800 text-lg mb-3">Reflect - chlef boukadir</h2>
      <span className="capitalize bg-gray-100 inline-block text-gray-900 px-2 py-1 rounded-sm">full time</span>
      <button className="text-white py-3 px-12 mt-4 block rounded-sm bg-blue-600 capitalize">apply</button>
    </section>
  )
}
