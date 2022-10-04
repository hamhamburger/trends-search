import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import generateBarData from '@/libs/generateBarData'
import type { BaseData } from '@/libs/types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {},
}
const BarGraph = ({
  barData,
  jsxInfoElement,
}: {
  barData: BaseData
  jsxInfoElement?: JSX.Element
}): JSX.Element => {
  const { labels, values, titleLabel } = generateBarData(barData)
  const data = {
    labels,
    datasets: [
      {
        label: titleLabel,
        data: values,
        backgroundColor: [],
        // グラフの枠線の色
        borderColor: [],
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  }

  // const average = Math.ceil(
  //   barData.data.reduce((accumulator, obj) => accumulator + obj.value, 0) /
  //     barData.data.length,
  // )

  return (
    <>
      <div>{jsxInfoElement}</div>
      <Bar data={data} options={options} />
    </>
  )
}
export default BarGraph
