import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <div className="bg-blue-600">
      <nav className="w-4/5 flex mx-auto text-white py-4 px-8">
        <a href="#" className="flex-none flex items-center justify-center">
          <img src={logo} className="h-9 pr-2" alt="logo" />
          <span className="font-bold font-pt">Discord</span>
        </a>
        <div className="flex-auto flex items-center justify-center">
          <a href="#" className="p-2 px-4 font-semibold">
            <span>Download</span>
          </a>
          <a href="#" className="p-2 px-4 font-semibold">
            <span>Nitro</span>
          </a>
          <a href="#" className="p-2 px-4 font-semibold">
            <span>Safety</span>
          </a>
          <a href="#" className="p-2 px-4 font-semibold">
            <span>Support</span>
          </a>
        </div>
        <div className="flex-none flex justify-center items-center">
          <button className="px-4 py-3 bg-white text-black rounded-full text-xs font-semibold">Login</button>
        </div>
      </nav>
    </div>
  )
}
