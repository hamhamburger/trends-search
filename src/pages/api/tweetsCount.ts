import type { NextApiRequest, NextApiResponse } from 'next'
import TwitterApi from 'twitter-api-v2'

import type { TweetsCount } from '@/libs/types'

const appOnlyClient = new TwitterApi(process.env['TWITTER_BEARER_TOKEN'] as string)

const getTweetsCount = async (keyword: string, client: TwitterApi): Promise<TweetsCount> => {
  const res = await client.v2.tweetCountRecent(keyword)

  const data = res.data.map(object => {
    const month = Number(object.start.substring(5, 7))
    const date = Number(object.start.substring(8, 10))
    const hour = Number(object.start.substring(11, 13))
    const value = object.tweet_count

    return { month, date, hour, value }
  })

  return { data, total: res.meta.total_tweet_count, keyword }
}

type Data = {
  data?: TweetsCount
  status: string
  message?: string
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const keyword = _req.query['keyword'] ? _req.query['keyword'].toString() : 'ビットコイン'
  const result = await getTweetsCount(keyword, appOnlyClient)
  if (result) {
    res.status(200).json({ data: result, status: 'success' })
  } else {
    res.status(200).json({
      status: 'failed',
      message: 'tweet not found',
    })
  }
}
