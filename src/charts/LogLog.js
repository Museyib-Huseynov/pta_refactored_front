import { useRef, useState, useEffect } from 'react'
import { Result } from '../components'
import { useInputContext } from '../context/input_context'
import styled from 'styled-components'
import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { getRelativePosition } from 'chart.js/helpers'
import regression from 'regression'

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
    .slice(0, -1)

  const derivativePressureData = time
    .map((item, index) => {
      return [Math.log10(item), Math.log10(derivativePressure[index])]
    })
    .slice(0, -1)

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
      <div className='wrapper'>
        <canvas ref={chartRef} style={{ cursor: 'crosshair' }}></canvas>
        {/* <Result type='MDH' regressionLine={regressionLine} /> */}
      </div>
    </LogLogWrapper>
  )
}

const LogLogWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-row-gap: 2rem;

  .wrapper {
    width: 90%;
  }
`

export default LogLog
