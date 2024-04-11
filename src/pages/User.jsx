import React from 'react'
import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserGroup, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';


function User() {

    const {getUser, user, loading} = useContext(GithubContext)

    const params = useParams()

    useEffect(() => {
        getUser(params.login)
    }, [])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user

    if(loading) {
        return <Spinner />
    }

  return (
    <>
    <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
            <Link to='/' className='btn btn-ghost'>
                Back To Search
            </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="  mb-6 md:mb-0" >
                <div className=" shadow-xl card image-full " >
                    <figure >
                        <img   src={avatar_url} alt="" />
                    </figure>
                    <div className="card-body justify-end  ">
                        <h2 className="card-title mb-0 text-slate-300">
                            {name}
                        </h2>
                        <h3 className='text-slate-300 text-xl'>{login}</h3>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="mb-6">
                    <h1 className="text-3xl card-title">
                        {name}
                        <div className="ml-2 mr-1 badge badge-success">
                            {type}
                        </div>
                        {hireable && (
                            <div className="mx-1 badge badge-info">Hireable</div>
                        )}
                    </h1>
                    <p>{bio}</p>
                    <div className="mt-4 card-actions">
                        <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline btn-primary'>
                            Visit Github Profile
                        </a>
                    </div>
                </div>
                <div className="w-full rounded-lg shadow-md bg-base-200 stats ">
                    {location && (
                        <div className="stat">
                            <div className="stat-title text-md">Location</div>
                            <div className="text-lg stat-value">
                                {location}
                            </div>
                        </div>
                    )}
                    {blog && (
                        <div className="stat">
                            <div className="stat-title text-md">Website</div>
                            <div className="text-lg stat-value">
                                <a href={`https://${blog}`} target='_blank' rel='noreferrer' className='hover:underline'>{blog}</a>
                            </div>
                        </div>
                    )}
                    {twitter_username && (
                        <div className="stat">
                            <div className="stat-title text-md">Twitter</div>
                            <div className="text-lg stat-value">
                                <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer' className='hover:underline'>{twitter_username}</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="w-full py-5 mb-6-rounded-lg shadow-md bg-base-200 stats">
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FontAwesomeIcon icon={faUser} className='text-3xl md:text-5xl' />
                </div>
                <div className="stat-title pr-5">
                    Followers
                </div>
                <div className="stat-value pr-5 text-3xl md:text-4xl">
                    {followers}
                </div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FontAwesomeIcon icon={faUserGroup} className='text-3xl md:text-5xl' />
                </div>
                <div className="stat-title pr-5">
                    Following
                </div>
                <div className="stat-value pr-5 text-3xl md:text-4xl">
                    {following}
                </div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FontAwesomeIcon icon={faCode} className='text-3xl md:text-5xl' />
                </div>
                <div className="stat-title pr-5">
                    Public Repos
                </div>
                <div className="stat-value pr-5 text-3xl md:text-4xl">
                    {public_repos}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default User