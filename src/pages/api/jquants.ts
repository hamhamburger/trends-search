import type { NextApiRequest, NextApiResponse } from 'next'

import Jquants from '@/libs/jquants'

type Data = {
  result: any
  message: string
}

const fetchRecentQuotes = async (stockCode: string, days: number): Promise<any> => {
  const jquants = new Jquants(process.env['JQUANTS_TOKEN'] as string)
  const result = await jquants.fetchRecentQuotes(stockCode, days)

  // const data = res.data.map(object => {
  //   console.log(object.start)
  //   const month = Number(object.start.substring(5, 7))
  //   const date = Number(object.start.substring(8, 10))
  //   const hour = Number(object.start.substring(11, 13))
  //   const count = object.tweet_count

  //   return { month, date, hour, count }
  // })

  // return { data, total: res.meta.total_tweet_count, keyword }
  return result
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const stockCode = _req.query['stockCode'] ? _req.query['stockCode'].toString() : 'ビットコイン'
  const result = await fetchRecentQuotes(stockCode, 7)
  res.status(200).json({ message: 'success', ...result })
}
