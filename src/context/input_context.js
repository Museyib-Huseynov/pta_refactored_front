import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/input_reducer'
import {
  SET_INPUT,
  SET_IMPORT,
  LOAD_SAMPLE_DATA,
  SET_MDH_REGRESSION,
  SET_MDH_ANNOTATION,
  SET_HORNER_REGRESSION,
  SET_HORNER_ANNOTATION,
  SET_AGARWAL_REGRESSION,
  SET_AGARWAL_ANNOTATION,
} from '../actions'
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
  shapeFactor: '',
  area: '',
  importedData: [],
  mdhRegression: '',
  mdhAnnotation: '',
  hornerRegression: '',
  hornerAnnotation: '',
  agarwalRegression: '',
  agarwalAnnotation: '',
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

  const setMDHRegression = (regression) => {
    dispatch({ type: SET_MDH_REGRESSION, payload: regression })
  }

  const setMDHAnnotation = (annotationObject) => {
    dispatch({ type: SET_MDH_ANNOTATION, payload: annotationObject })
  }

  const setHornerRegression = (regression) => {
    dispatch({ type: SET_HORNER_REGRESSION, payload: regression })
  }

  const setHornerAnnotation = (annotationObject) => {
    dispatch({ type: SET_HORNER_ANNOTATION, payload: annotationObject })
  }

  const setAgarwalRegression = (regression) => {
    dispatch({ type: SET_AGARWAL_REGRESSION, payload: regression })
  }

  const setAgarwalAnnotation = (annotationObject) => {
    dispatch({ type: SET_AGARWAL_ANNOTATION, payload: annotationObject })
  }

  return (
    <InputContext.Provider
      value={{
        ...state,
        setInput,
        setImport,
        loadSampleData,
        setMDHRegression,
        setMDHAnnotation,
        setHornerRegression,
        setHornerAnnotation,
        setAgarwalRegression,
        setAgarwalAnnotation,
      }}
    >
      {children}
    </InputContext.Provider>
  )
}

const useInputContext = () => {
  return useContext(InputContext)
}

export { InputProvider, useInputContext }
