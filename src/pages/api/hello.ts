import googleTrends from 'google-trends-api'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>): void {
  const param = { keyword: 'スプラトゥーン' }
  // google-trends-apiを実行
  googleTrends
    .relatedQueries(param)
    .then((result: any) => {
      console.log(result)
    })
    .catch((err: any) => {
      console.error(err)
    })
  res.status(200).json({ name: 'John Doe' })
}
