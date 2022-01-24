import { useRef, useEffect } from 'react'
import { useInputContext } from '../context/input_context'
import styled from 'styled-components'
import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { shapeSimilarity } from 'curve-matcher'
import {
  bourdet1,
  bourdet2,
  bourdet3,
  bourdet4,
  bourdet5,
  bourdet6,
  bourdet7,
  bourdet8,
  bourdet9,
  gringarten1,
  gringarten2,
  gringarten3,
  gringarten4,
  gringarten5,
  gringarten6,
  gringarten7,
  gringarten8,
  gringarten9,
} from '../gringarten-bourdet'

Chart.register(...registerables, annotationPlugin)

function LogLog() {
  const chartRef = useRef(null)
  const { importedData } = useInputContext()

  const time = importedData.map((item) => item[0])
  const pressure = importedData.map((item) => item[1])
  const pressureChange = pressure.map((item) => item - pressure[0])
  const derivativePressure = time.map((item, index) => {
    return (
      item *
      ((pressureChange[index + 1] - pressureChange[index]) /
        (time[index + 1] - time[index]))
    )
  })

  const pressureChangeData = time
    .map((item, index) => {
      return [Math.log10(item), Math.log10(pressureChange[index])]
    })
    .slice(1, -1)

  const derivativePressureData = time
    .map((item, index) => {
      return [Math.log10(item), Math.log10(derivativePressure[index])]
    })
    .slice(1, -1)

  const curve_pressureChangeData = pressureChangeData.map((item) => {
    return { x: item[0], y: item[1] }
  })

  const curve_derivativePressureData = derivativePressureData.map((item) => {
    return { x: item[0], y: item[1] }
  })

  const gringarten_array = [
    gringarten1,
    gringarten2,
    gringarten3,
    gringarten4,
    gringarten5,
    gringarten6,
    gringarten7,
    gringarten8,
    gringarten9,
  ]
  const bourdet_array = [
    bourdet1,
    bourdet2,
    bourdet3,
    bourdet4,
    bourdet5,
    bourdet6,
    bourdet7,
    bourdet8,
    bourdet9,
  ]

  const similarity_gringarten = gringarten_array.map((item) => {
    return shapeSimilarity(curve_pressureChangeData, item)
  })
  const similarity_bourdet = bourdet_array.map((item) => {
    return shapeSimilarity(curve_derivativePressureData, item)
  })

  console.log('gringarten', similarity_gringarten)
  console.log('bourdet', similarity_bourdet)

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: 'scatter',
      ////////////////////////////////////////////
      data: {
        datasets: [
          {
            data: pressureChangeData,
            backgroundColor: 'green',
          },
          {
            data: derivativePressureData,
            backgroundColor: 'red',
          },
        ],
      },
      ////////////////////////////////////////////
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Log (Δt)',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Log (Pressure)',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Log Log Diagnostic plot',
            position: 'top',
            font: {
              size: 20,
              weight: 'bold',
            },
          },
          tooltip: {
            // enabled: false,
          },
        },
      },
      ////////////////////////////////////////
    })
    return () => myChart.destroy()
  }, [importedData])

  return (
    <LogLogWrapper>
      <canvas ref={chartRef} style={{ cursor: 'crosshair' }}></canvas>
    </LogLogWrapper>
  )
}

const LogLogWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-row-gap: 2rem;
`

export default LogLog
