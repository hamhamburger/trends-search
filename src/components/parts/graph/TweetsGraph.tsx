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

import { useAppState } from '@/components/state/useAppState'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}
const TweetsGraph = (): JSX.Element => {
  const { tweetsCount } = useAppState()
  if (!tweetsCount) return <></>

  const labels = tweetsCount?.data.map(obj => `${obj.day}日${obj.hour}時`)
  const counts = tweetsCount?.data.map(obj => obj.count)
  const data = {
    labels,
    datasets: [
      {
        data: counts,
        label: tweetsCount.keyword,
        backgroundColor: [],
        // グラフの枠線の色
        borderColor: [],
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  }

  const average = Math.ceil(
    tweetsCount?.data.reduce((accumulator, obj) => accumulator + obj.count, 0) /
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
