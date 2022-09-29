import googleTrends from 'google-trends-api'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>): void {
  console.log(_req)
  const keyword = _req.query['keyword']
  const param = { keyword }
  // google-trends-apiを実行
  googleTrends
    .relatedQueries(param)
    .then((result: any) => {
      console.log(result)
      res.status(200).json(result)
      // res.status(200).json(result)
    })
    .catch((err: any) => {
      console.error(err)
      res.status(500).json(err)
    })
}
