import React from 'react'

const navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white '>
      <div className="logo font-bold text-2xl"> 
        <a href="/">BitLinks</a>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/shorten"><li>Shorten</li></a>
        <a href="/contact"><li>Contact Us</li></a>
        <li className='flex gap-3'>
          <a href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></a>
          <a href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button></a>
        </li>
      </ul>
    </nav>
  )
}

export default navbar