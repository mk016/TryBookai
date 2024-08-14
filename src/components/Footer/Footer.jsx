import React from 'react'

function Footer() {
  return (
    <div className='container mx-auto '>
        <div className='text-center mb-5 '>
            <h3 className='text-white'>@2024 BookAI. All rights reserved</h3>
        </div>
        <ul className=' flex justify-around mb-7 text-gray-400'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Footer
