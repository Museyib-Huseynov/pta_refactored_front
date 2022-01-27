import { SET_INPUT, SET_IMPORT, LOAD_SAMPLE_DATA } from '../actions'
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
    default:
      return state
  }
}

export default input_reducer
