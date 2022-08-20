import React from 'react'

export default function LoginForm () {
  return (
    <section className="bg-gray-50 h-screen font-poppins">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className='text-center text-gray-900 font-semibold text-3xl md:text-4xl lg:text-5xl mb-5'>Shield</h1>
        <div className="bg-white p-6 shadow-lg w-11/12 sm:w-8/12 md:4/5 lg:w-2/5">
          <form action="" className="flex flex-col">
            <label htmlFor="email" className="text-gray-900 font-medium text-base md:text-lg mb-2">Email</label>
            <input type="email" name="email" id="email" placeholder='johnDoe@gamil.com' className="py-2 px-3 bg-gray-50 rounded-md text-lg border-2 border-solid border-gray-100 mb-3" />
            <label htmlFor="password" className="text-gray-900 font-medium text-base md:text-lg mb-2">Password</label>
            <input type="password" name="password" id="password" placeholder='***********' className="py-2 px-3 bg-gray-50 rounded-md text-lg border-2 border-solid border-gray-100 mb-3" />
            <button className="bg-blue-500 text-white px-6 py-2.5 rounded-sm font-medium">Signin</button>
          </form>
        </div>
      </div>
    </section>
  )
}
