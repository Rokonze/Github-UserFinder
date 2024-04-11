import React from 'react'
import tailwindLogo from '../assets/tailwind.png'
import reactLogo from '../assets/react.png'
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css.png'

function About() {
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-4xl mb-6 font-bold'>About</h1>
      <p>Thank you for visiting my project!</p>
      <p className='pb-6'>Project done with:</p>
      <div className='flex flex-row justify-center items-center'>
        <figure >
          <img src={htmlLogo} alt="HTML" width={100} height={100} className='px-2 mx-6 '/>
        </figure>
        <figure>
          <img src={cssLogo} alt="CSS" width={100} height={100} className='px-2 mx-6'/>
        </figure>
        <figure>
          <img src={reactLogo} alt="React JS" width={100} height={100} className='px-2 mx-6'/>
        </figure>
        <figure >
          <img src={tailwindLogo} alt="Tailwind CSS" width={100} height={100} className='px-2 mx-6'/>
        </figure>
        
        
      </div>

      
    </div>
  )
}

export default About