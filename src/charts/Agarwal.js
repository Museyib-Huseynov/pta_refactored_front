import { useRef, useState, useEffect } from 'react'
import { Result } from '../components'
import { useInputContext } from '../context/input_context'
import styled from 'styled-components'
import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { getRelativePosition } from 'chart.js/helpers'
import regression from 'regression'

Chart.register(...registerables, annotationPlugin)

function Agarwal() {
  const [regressionLine, setRegressionLine] = useState(null)
  const chartRef = useRef(null)
  const { importedData, productionTime } = useInputContext()

  let Agarwal_data = []
  if (productionTime) {
    Agarwal_data = importedData.map((item) => [
      Math.log10((+productionTime * item[0]) / (+productionTime + item[0])),
      item[1],
    ])
  }

  useEffect(() => {
    setRegressionLine(null) // if we change productionTime set regressionLine to null when update
    const myChart = new Chart(chartRef.current, {
      type: 'scatter',
      ////////////////////////////////////////////
      data: {
        datasets: [
          {
            data: Agarwal_data,
            backgroundColor: 'green',
          },
        ],
      },
      ////////////////////////////////////////////
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Log (Equivalent time)',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Pressure, psi',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Agarwal Equivalent-Time method',
            position: 'top',
            font: {
              size: 16,
              weight: 'bold',
            },
          },
          tooltip: {
            // enabled: false,
          },
        },
        onClick: (e) => {
          if (myChart) {
            const canvasPosition = getRelativePosition(e, myChart)
            const dataX = myChart.scales.x.getValueForPixel(canvasPosition.x)

            const regressionArray = []
            for (let item of Agarwal_data) {
              if (item[0] >= dataX) {
                regressionArray.push(item)
              }
            }

            const result = regression.linear(regressionArray)
            setRegressionLine(result)

            if (result.r2) {
              //check to see when click out of range no error in console
              myChart.options.plugins.annotation.annotations = {
                line1: {
                  type: 'line',
                  xMin: dataX - 0.5,
                  yMin: result.predict(dataX - 0.5)[1],
                  xMax: regressionArray[regressionArray.length - 1][0],
                  yMax: result.predict(
                    regressionArray[regressionArray.length - 1][0]
                  )[1],
                  borderColor: 'black',
                  borderWidth: 2,
                  label: {
                    enabled: true,
                    content: result.string,
                    backgroundColor: 'transparent',
                    color: 'black',
                    padding: 10,
                    xAdjust: -150,
                    yAdjust: -10,
                  },
                },
              }
            }
            myChart.update()
          }
        },
      },
      ////////////////////////////////////////
    })
    return () => myChart.destroy()
  }, [importedData, productionTime])

  return (
    <AgarwalWrapper>
      <canvas ref={chartRef} style={{ cursor: 'crosshair' }}></canvas>
      <Result
        type='Agarwal Equivalent-Time method'
        regressionLine={regressionLine}
      />
    </AgarwalWrapper>
  )
}

const AgarwalWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-row-gap: 2rem;
`

export default Agarwal
