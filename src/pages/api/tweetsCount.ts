import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'
import TwitterApi from 'twitter-api-v2'

import type { ResultData, TweetsCountResult } from '@/libs/types'

const appOnlyClient = new TwitterApi(process.env['TWITTER_BEARER_TOKEN'] as string)

const getTweetsCount = async (keyword: string, client: TwitterApi): Promise<TweetsCountResult> => {
  const res = await client.v2.tweetCountRecent(keyword)

  const data = res.data.map(object => {
    const date = dayjs(object.start)
    const value = object.tweet_count
    const dateTime = date.toDate()

    return { value, dateTime }
  })

  return {
    data,
    total: res.meta.total_tweet_count,
    keyword,
    titleLabel: `${keyword}のツイート数`,
    status: 'success',
  }
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResultData>,
): Promise<void> {
  const keyword = _req.query['keyword'] ? _req.query['keyword'].toString() : 'ビットコイン'
  const result = await getTweetsCount(keyword, appOnlyClient)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(200).json({
      status: 'failed',
      message: 'tweet not found',
    })
  }
}
