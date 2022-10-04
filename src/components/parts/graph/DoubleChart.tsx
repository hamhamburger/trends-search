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
import { Line } from 'react-chartjs-2'

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

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: '株価とツイート数',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}

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

        yAxisID: 'y',
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
        yAxisID: 'y1',
      },
    ],
  }

  // const average = Math.ceil(
  //   tweetsCount?.data.reduce((accumulator, obj) => accumulator + obj.value, 0) /
  //     tweetsCount.data.length,
  // )

  return (
    <>
      <Line data={data} options={options} />
    </>
  )
}
export default DoubleChart
