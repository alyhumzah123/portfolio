import React, { useContext, useState } from 'react'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {

  
  const [fill, setfill] = useState(false)

  const fillfunc = () => {
    setfill(true)
  }
  return (
    <div>
      <AppContext.Provider value={{ fillfunc, fill }} >
        {children}
      </AppContext.Provider>
    </div>
  )
}

export const useGlobalcontext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
