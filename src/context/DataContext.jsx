import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const navigate = useNavigate()

    return (
        <DataContext.Provider value={{
            navigate
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext
