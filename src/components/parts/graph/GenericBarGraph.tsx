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


import type { BaseData } from '@/libs/types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {},
}
const GenericBarGraph = ({
  barData,
  jsxInfoElement,
}: {
  barData: BaseData
  jsxInfoElement?: JSX.Element
}): JSX.Element => {
  // if (!tweetsCount) return <></>

  const labels = barData.data.map(obj => {
    const hour = obj.hour ? `${obj.hour}時` : ''

    return `${obj.date}日 ${hour}`
  })
  const counts = barData.data.map(obj => obj.value)
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: counts,
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
export default GenericBarGraph
