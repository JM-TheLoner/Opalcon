import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const navigate = useNavigate()
    const [status, setstatus] = useState('')

    return (
        <DataContext.Provider value={{
            navigate, status, setstatus
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext
