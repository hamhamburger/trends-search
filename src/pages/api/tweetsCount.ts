import type { NextApiRequest, NextApiResponse } from 'next'
import TwitterApi from 'twitter-api-v2'

const appOnlyClient = new TwitterApi(process.env['TWITTER_BEARER_TOKEN'] as string)

const getTweetsCount = async (keyword: string, client: TwitterApi): Promise<any> => {
  const tweetsCount = await client.v2.tweetCountRecent(keyword)

  return tweetsCount
}

type Data = {
  tweets?: any[]
  message: string
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const keyword = _req.query['keyword'] ? _req.query['keyword'].toString() : 'ビットコイン'
  const result = await getTweetsCount(keyword, appOnlyClient)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(404).json({
      message: 'Tweets not found',
    })
  }
}
