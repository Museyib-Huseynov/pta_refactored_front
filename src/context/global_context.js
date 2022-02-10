import React, { useState, useEffect, useContext } from 'react'

const GlobalContext = React.createContext()

const GlobalProvider = ({ children }) => {
  const [fieldsEmpty, setFieldsEmpty] = useState(false)

  return (
    <GlobalContext.Provider value={{ fieldsEmpty, setFieldsEmpty }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider }
