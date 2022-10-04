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
import type { TweetsCount } from '@/libs/types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {},
}
const TweetsGraph = ({ tweetsCount }: { tweetsCount: TweetsCount }): JSX.Element => {
  const { labels, values, titleLabel } = generateBarData(tweetsCount)
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
    tweetsCount?.data.reduce((accumulator, obj) => accumulator + obj.value, 0) /
      tweetsCount.data.length,
  )

  return (
    <>
      <div>
        <div>総ツイート {tweetsCount?.total}</div>
        <div>平均ツイート/日 {average}</div>
      </div>
      <Bar data={data} options={options} />
    </>
  )
}
export default TweetsGraph
