import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function Spinner() {
  return (
    <div className='w-100 mt-20 flex flex-row justify-center'>
        <FontAwesomeIcon icon={faCircleNotch} className='animate-spin text-4xl mx-1 text-center' />
        <p className='text-4xl text-center'>Loading...</p>
    </div>
  )
}

export default Spinner