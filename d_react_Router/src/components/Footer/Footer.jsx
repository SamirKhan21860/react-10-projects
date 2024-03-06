// import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <footer className="bg-white border-y">
        <div className="max-auto">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img src="" alt="" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">Home</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/about" className="hover:underline">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer