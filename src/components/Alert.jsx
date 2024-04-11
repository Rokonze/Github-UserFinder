import React from 'react'
import AlertContext from '../context/alert/AlertContext'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function Alert() {
    const {alert} = useContext(AlertContext)

  return alert !== null && (
    
    <div className="flex items-center mb-4 space-x-2 ">
        {alert.type === 'error' && (
            <FontAwesomeIcon icon={faCircleExclamation} className='text-2xl mx-1 text-center' />
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
        </p>
    </div>
  )
}

export default Alert