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
import sampleData from '../sampleData'

const input_reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case SET_IMPORT:
      return {
        ...state,
        importedData: action.payload,
      }
    case LOAD_SAMPLE_DATA:
      return {
        ...state,
        porosity: 20,
        viscosity: 2.24,
        totalCompressibility: 102e-7,
        wellRadius: 0.25,
        fvf: 1.17,
        effectiveThickness: 25,
        rate: 100,
        productionTime: 2160,
        shapeFactor: 31.62,
        area: 40,
        importedData: sampleData,
      }
    case SET_MDH_REGRESSION:
      return {
        ...state,
        mdhRegression: action.payload,
      }
    case SET_MDH_ANNOTATION:
      return {
        ...state,
        mdhAnnotation: action.payload,
      }
    case SET_HORNER_REGRESSION:
      return {
        ...state,
        hornerRegression: action.payload,
      }
    case SET_HORNER_ANNOTATION:
      return {
        ...state,
        hornerAnnotation: action.payload,
      }
    case SET_AGARWAL_REGRESSION:
      return {
        ...state,
        agarwalRegression: action.payload,
      }
    case SET_AGARWAL_ANNOTATION:
      return {
        ...state,
        agarwalAnnotation: action.payload,
      }
    default:
      return state
  }
}

export default input_reducer
