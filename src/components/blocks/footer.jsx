import React from 'react'

import { Container } from '@components/_index'

export default function Footer () {
  return (
    <footer className="bg-blue-900 py-16 font-poppins">
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <a href="/" className="text-white text-2xl font-semibold mb-4">Shield</a>
          <p className="text-white text-md">Shield, First platform specializing in IT recruitment</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-2xl font-semibold mb-4">About</h3>
          <ul className="text-white text-md">
            <li><a href="/" className="text-white">who are we?</a></li>
            <li><a href="/" className="text-white">how it works?</a></li>
            <li><a href="/" className="text-white">why trust me?</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
            <h3 className="text-white text-2xl font-semibold mb-4">Contact</h3>
            <ul className="text-white text-md">
              <li className="capitalize">boukadir chlef algeria</li>
              <li className="mt-3">
                <p>Email:</p>
                <p>contact@shield.com</p>
              </li>
            </ul>
        </div>
        </div>
      </Container>
    </footer>
  )
}
