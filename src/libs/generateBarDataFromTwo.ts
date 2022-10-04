import dayjs from 'dayjs'

import type { BaseData } from './types'

type Times = { [dateTime: string]: number | null }

export default function generateBarDataFromTwo(
  data1: BaseData,
  data2: BaseData,
): {
  labels: string[]
  values1: Array<number | null>
  values2: Array<number | null>
} {
  const startDateTime = dayjs(
    data1.data[0].dateTime < data2.data[0].dateTime
      ? data2.data[0].dateTime
      : data1.data[0].dateTime,
  )
    .minute(0)
    .second(0)
    .millisecond(0)

  const endDateTime = dayjs(
    data1.data.slice(-1)[0].dateTime > data2.data.slice(-1)[0].dateTime
      ? data2.data.slice(-1)[0].dateTime
      : data1.data.slice(-1)[0].dateTime,
  )
    .minute(0)
    .second(0)
    .millisecond(0)

  const times: { [dateTime: string]: number | null } = {}
  for (let time = startDateTime; time < endDateTime; time = time.add(1, 'hour')) {
    times[time.toString()] = null
  }

  const result1 = generateFullfilled(data1, Object.assign({}, times))

  const result2 = generateFullfilled(data2, Object.assign({}, times))

  const labels = Object.keys(times).map(timeString => {
    const time = dayjs(timeString)

    return `${time.month()}/${time.date()} ${time.hour()}時`
  })

  return { labels, values1: result1, values2: result2 }
}

function generateFullfilled(data: BaseData, times: Times): Array<number | null> {
  data.data.forEach(obj => {
    const time = dayjs(obj.dateTime).minute(0).second(0).millisecond(0).toString()

    times[time] = obj.value
  })

  return Object.values(times)
}
