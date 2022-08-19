import React from 'react'

import { Container } from '@components/_index'

export default function Footer () {
  return (
    <footer className="bg-blue-900 py-16 font-poppins">
      <Container maxW="5xl">
        <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <a href="/" className="text-white text-2xl font-semibold">Shield</a>
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <a href="/" className="text-white">Read more</a>
          </p>
        </div>
        <div className="flex flex-col">
            <h3 className="text-white text-2xl font-semibold">Company</h3>
            <ul className="text-white text-sm">
              <li><a href="/" className="text-white">About</a></li>
              <li><a href="/" className="text-white">Careers</a></li>
              <li><a href="/" className="text-white">Press</a></li>
              <li><a href="/" className="text-white">Blog</a></li>
              <li><a href="/" className="text-white">Contact</a></li>
            </ul>
        </div>
        </div>
      </Container>
    </footer>
  )
}
