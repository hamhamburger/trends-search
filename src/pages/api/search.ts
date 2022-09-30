import dayjs from 'dayjs'
import googleTrends from 'google-trends-api'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const searchThisWeekInterestByRegion = async (keyword: string): Promise<any> => {
  const date = dayjs()
  const result = await googleTrends.interestOverTime({
    keyword,
    geo: 'JP',
    hl: 'ja',
    startTime: date.subtract(10, 'day').toDate(),
    endTime: date.toDate(),
  })

  return result
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const keyword = _req.query['keyword'] ? _req.query['keyword'].toString() : 'ビットコイン'
  const result = await searchThisWeekInterestByRegion(keyword)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(404).json({
      message: 'Could not find',
    })
  }
}
