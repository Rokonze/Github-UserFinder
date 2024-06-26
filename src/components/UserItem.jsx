import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-300 '>
        <div className=" flex-row items-center space-x-4 card-body ">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="Profile" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className="card-title">{login}</h2>
                <Link className='text-base-content text-opacity-40 btn btn-ghost btn-sm' to={`/user/${login}`}>Visit Profile
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem