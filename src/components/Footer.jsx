import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const footYear = new Date().getFullYear()

  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="container mx-auto flex flex-col justify-between items-center content-center">
            <p className='text-sm'>Made by Iulian</p>
            <div className='flex flex-row justify-between '>
                <a href="https://linkedin.com/in/iulian-serban-12ab3522b" role="button" className="btn btn-ghost  mx-1">
                    <FontAwesomeIcon icon={faLinkedin} className='text-3xl'/>
                </a>
                <a href="https://github.com/Rokonze" role="button" className="btn btn-ghost mx-1">
                    <FontAwesomeIcon icon={faGithub} className='text-3xl'/>
                </a>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer