/* eslint-disable no-unused-vars */
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

import generateBarData from '@/libs/generateBarData'
import type { BaseData } from '@/libs/types'

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
)

const DoubleChart = ({ barDatas }: { barDatas: BaseData[] }): JSX.Element => {
  console.log(barDatas)
  console.log('rendered')

  const datasets = barDatas.map(data => generateBarData(data))
  const data = {
    labels: datasets[0].labels,
    datasets: [
      {
        type: 'line' as const,
        data: datasets[0].values,
        label: datasets[0].titleLabel,
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
      },
      {
        type: 'bar' as const,
        data: datasets[1]?.values,
        label: datasets[1]?.titleLabel,
        backgroundColor: [],
        // グラフの枠線の色
        borderColor: [],
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  }

  // const average = Math.ceil(
  //   tweetsCount?.data.reduce((accumulator, obj) => accumulator + obj.value, 0) /
  //     tweetsCount.data.length,
  // )

  return (
    <>
      <Chart data={data} type='bar' />
    </>
  )
}
export default DoubleChart
