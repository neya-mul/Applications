import React, { Children, createContext, useState } from 'react'
export const InstallAppContext = createContext()

export default function AppProvider({ children }) {
    const [install, setInstall] = useState([])
    let obj = {
       install, 
       setInstall
    }
    return (
        <InstallAppContext.Provider value={obj}>
            {children}
        </InstallAppContext.Provider>
    )
}
