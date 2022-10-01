import dayjs from 'dayjs'
import googleTrends from 'google-trends-api'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const searchThisWeekInterestByRegion = async (keyword: string): Promise<any> => {
  const date = dayjs()
  const response = await googleTrends.interestOverTime({
    keyword,
    geo: 'JP',
    granularTimeResolution: true,
    startTime: date.subtract(10, 'day').toDate(),
    endTime: date.toDate(),
  })
  const result = JSON.parse(response)
  console.log(result)
  const data = result.default.timelineData.map(object => {
    const dateTime = dayjs(object.formattedTime)
    const date = dateTime.date()
    const month = dateTime.month() + 1
    const value = object.value

    return { date, month, value }
  })

  return { data, keyword }
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const keyword = _req.query['keyword'] ? _req.query['keyword'].toString() : 'ビットコイン'
  const result = await searchThisWeekInterestByRegion(keyword)
  if (result) {
    res.status(200).json({ ...result, message: 'success' })
  } else {
    res.status(404).json({
      message: 'Could not find',
    })
  }
}
