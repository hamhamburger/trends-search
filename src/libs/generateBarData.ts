import type { BaseData } from './types'

export default function generateBarData(data: BaseData): {
  labels: string[]
  values: number[]
  keyword: string
  titleLabel: string
} {
  // const labels = data.data.map(obj => `${obj.date}日 ${obj.hour}時`)
  const labels = data.data.map(obj => {
    return obj.dateTime.getDate()
    // `${obj.dateTime.getDate}`
  })
  const values = data.data.map(obj => obj.value)
  const keyword = data.keyword
  const titleLabel = data.titleLabel

  return { labels, values, keyword, titleLabel }
}
