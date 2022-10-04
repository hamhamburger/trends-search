import type { BarData, BaseData } from './types'

export default function generateBarData(data: BaseData): BarData {
  // const labels = data.data.map(obj => `${obj.date}日 ${obj.hour}時`)
  const labels = data.data.map(obj => {
    const dateTime = new Date(obj.dateTime)

    return `${dateTime.getMonth()}/${dateTime.getDate()} ${dateTime.getHours()}時`
  })
  const values = data.data.map(obj => obj.value)
  const keyword = data.keyword
  const titleLabel = data.titleLabel

  return { labels, values, keyword, titleLabel }
}
