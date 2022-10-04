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

import generateBarDataFromTwo from '@/libs/generateBarDataFromTwo'
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

const DoubleChart = ({ data1, data2 }: { data1: BaseData; data2: BaseData }): JSX.Element => {
  const { labels, values1, values2 } = generateBarDataFromTwo(data1, data2)

  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line' as const,
        data: values1,
        label: data1.titleLabel,
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
      },
      {
        type: 'bar' as const,
        data: values2,
        label: data2.titleLabel,
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
