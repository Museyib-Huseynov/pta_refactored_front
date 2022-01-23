import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/input_reducer'
import { SET_INPUT, SET_IMPORT, LOAD_SAMPLE_DATA } from '../actions'
import readXlsxFile from 'read-excel-file'

const initialState = {
  porosity: '',
  viscosity: '',
  totalCompressibility: '',
  wellRadius: '',
  fvf: '',
  effectiveThickness: '',
  rate: '',
  productionTime: '',
  importedData: [],
}

const InputContext = React.createContext()

const InputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setInput = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (name === 'porosity' && (value < 0 || value > 100)) {
      value = 0
    }
    dispatch({ type: SET_INPUT, payload: { name, value } })
  }

  const setImport = (e) => {
    readXlsxFile(e.target.files[0]).then((rows) => {
      dispatch({ type: SET_IMPORT, payload: rows })
    })
  }

  const loadSampleData = () => {
    dispatch({ type: LOAD_SAMPLE_DATA })
  }

  return (
    <InputContext.Provider
      value={{ ...state, setInput, setImport, loadSampleData }}
    >
      {children}
    </InputContext.Provider>
  )
}

const useInputContext = () => {
  return useContext(InputContext)
}

export { InputProvider, useInputContext }
