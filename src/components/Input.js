import styled from 'styled-components'
import { useInputContext } from '../context/input_context'
import { InputElement } from '.'
import { useNavigate } from 'react-router-dom'

const Input = () => {
  const { setImport, loadSampleData } = useInputContext()
  const navigate = useNavigate()

  const handleImportData = (e) => {
    setImport(e)
    navigate('/mdh')
  }

  const handleLoadSampleData = () => {
    loadSampleData()
    navigate('/mdh')
  }
  return (
    <InputWrapper>
      <h1>Input data</h1>
      <InputElement type='porosity' label='Porosity (%)' />
      <InputElement type='viscosity' label='Viscosity (cp)' />
      <InputElement type='effectiveThickness' label='EffectiveThickness (ft)' />
      <InputElement type='fvf' label='FVF (bbl/STB)' />
      <InputElement
        type='totalCompressibility'
        label='Total compressibility (1/psi)'
      />
      <InputElement type='wellRadius' label='Well radius (ft)' />
      <InputElement type='rate' label='Flowing rate (STB/day)' />
      <InputElement type='productionTime' label='Production time (hour)' />
      <InputElement
        type='shapeFactor'
        label={['Shape Factor (C', <sub>A</sub>, ')']}
      />
      <InputElement type='area' label='Area (acres)' />
      <label htmlFor='file' className='file'>
        Import Pressure data
      </label>
      <input
        id='file'
        type='file'
        accept='.xlsx'
        onChange={handleImportData}
        hidden
      />
      <button type='button' onClick={handleLoadSampleData}>
        Load Sample Data
      </button>
    </InputWrapper>
  )
}

const InputWrapper = styled.form`
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 1rem;
  background: #c8c8c8;
  padding: 1rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  h1 {
    margin: auto;
  }

  .file,
  button {
    width: max-content;
    margin: auto;
    padding: 0.8rem;
    background: green;
    color: white;
    border-radius: 10px;
    letter-spacing: 2px;
    cursor: pointer;
  }

  button {
    background: #ff7000;
    color: #000;
    font-weight: 600;
    // border: none;
  }
`

export default Input
