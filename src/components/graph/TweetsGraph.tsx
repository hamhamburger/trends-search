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
        label: 'Dataset',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        // グラフの枠線の色
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  }
  console.log(data)

  return (
    <>
      <div>総ツイート {tweetsCount?.total}</div>
      <Bar data={data} options={options} />
    </>
  )
}
export default TweetsGraph
