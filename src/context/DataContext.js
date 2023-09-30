import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const baseUrl = "https://opalconbackend.glitch.me"

    const [userInput, setuserInput] = useState('')
    const [pwdInput, setpwdInput] = useState('')
    const [emailInput, setemailInput] = useState('')
    const [newPwd, setnewPwd] = useState('')
    const [confirmPwd, setconfirmPwd] = useState('')
    const [loggedIn, setloggedIn] = useState(false)
    const navigate = useNavigate()
    const [accessKey, setaccessKey] = useState('')
    const [fetchError, setfetchError] = useState('')
    const [user, setuser] = useState('')
    const [status, setstatus] = useState('')

    const handleRefresh = async () => {
        try{const response = await fetch(`${baseUrl}/refresh`, {
            method:'POST',
            headers:{
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${accessKey}`
            },
            body: JSON.stringify({
                name: user
            })
        })
        if (!response.ok) throw Error('Did Not Recieve Expected Data')
        const access = await response.json()
        await setaccessKey(access)
        setfetchError(null)
    } catch (err){
        setfetchError(err.message)
        if (err.response){
          setfetchError(err.response.data)
        } else {
          setfetchError(`Error: ${fetchError}`)
        }}finally{
          navigate('/')
        }
}

    return (
        <DataContext.Provider value={{
            setaccessKey, accessKey, userInput, setuserInput, pwdInput, setpwdInput, emailInput, setemailInput, newPwd, setnewPwd, confirmPwd, setconfirmPwd, loggedIn, setloggedIn, setuser, user, baseUrl, handleRefresh, status, setstatus
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext
