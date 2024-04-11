import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com/search/users'
const GITHUB_USER_URL = 'https://api.github.com/users'

export const GithubProvider = ({children}) => {

    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const clearUsers = () => {
        dispatch ({
            type: 'CLEAR_USERS'

        })
    }

    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })

        const res = await fetch(`${GITHUB_URL}?${params}`)
        const {items} = await res.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const getUser = async (login) => {
        setLoading()
        
        

        const res = await fetch(`${GITHUB_USER_URL}/${login}`)

        if(Response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await res.json()

            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }

        
    }

    // Set loading

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    return ( 
    <GithubContext.Provider 
        value={{
            users: state.users,
            loading: state.loading,
            user: state.user,
            searchUsers,
            clearUsers,
            getUser
        }}
    >
        {children}
    </GithubContext.Provider>
    )
}

export default GithubContext