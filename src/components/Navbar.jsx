"use client"
import React from 'react';
export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Landslide Risk Monitor</h1>
          <div className="flex space-x-4">
            <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
              Home
            </button>
            <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
              About
            </button>
            <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
              Contact
            </button>
          </div>
        </div>
      </nav>
    );
  }
  