import type { NextApiRequest, NextApiResponse } from 'next'
import TwitterApi from 'twitter-api-v2'

const appOnlyClient = new TwitterApi(process.env['TWITTER_BEARER_TOKEN'] as string)

const getTweetsInfo = async (keyword: string, client: TwitterApi): Promise<any> => {
  const tweets = await client.search('JavaScript', { 'media.fields': 'url' })

  return tweets
}

type Data = {
  tweets?: any[]
  status: string
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const keyword = _req.query['keyword'] ? _req.query['keyword'].toString() : 'ビットコイン'
  const result = await getTweetsInfo(keyword, appOnlyClient)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(404).json({
      status: 'Tweets not found',
    })
  }
}
