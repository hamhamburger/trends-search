import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'
import yahooFinance from 'yahoo-finance2'

type Data = {
  status: string
  data?: any
  message?: string
}

const fetchRecentQuotes = async (stockCode = '7974', days = 7): Promise<any> => {
  const date = dayjs()
  const queryOptions = {
    period1: date.subtract(7, 'days').toDate(),
    period2: date.toDate(),
    interval: '1h' as const,
    return: 'array' as 'object',
    // 上のキャストはエラーが出るため
  }
  let result
  try {
    result = await yahooFinance._chart(`${stockCode}.T`, queryOptions)
  } catch (e) {
    return { status: 'failed', message: e.message }
  }

  const response = result['quotes'].map((obj: { close: number; date: string }) => {
    const date = dayjs(obj.date)

    return {
      value: obj.close,
      month: date.month() + 1,
      date: date.date(),
      hour: date.hour(),
    }
  })

  return { data: response, code: stockCode, status: 'success' }
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const stockCode = _req.query['stockCode'] ? _req.query['stockCode'].toString() : 'ビットコイン'
  const result = await fetchRecentQuotes(stockCode, 7)
  res.status(200).json(result)
}
