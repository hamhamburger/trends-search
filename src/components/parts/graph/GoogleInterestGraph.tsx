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
const GoogleInterestGraph = ({ googleInterest }: { googleInterest: BaseData }): JSX.Element => {
  if (!googleInterest) return <></>
  const { labels, values, titleLabel } = generateBarData(googleInterest)
  const data = {
    labels,
    datasets: [
      {
        data: values,
        label: titleLabel,
        backgroundColor: [],
        // グラフの枠線の色
        borderColor: [],
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  }

  const average = Math.ceil(
    googleInterest?.data.reduce((accumulator, obj) => accumulator + obj.value, 0) /
      googleInterest.data.length,
  )

  return (
    <>
      <div>
        <div>グーグルトレンド（相対値）</div>
        <div>平均 {average}</div>
      </div>
      <Bar data={data} options={options} />
    </>
  )
}
export default GoogleInterestGraph

//  他のグラフと共通化したほうがいいかも
