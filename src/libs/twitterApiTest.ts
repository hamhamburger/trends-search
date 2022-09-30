import TwitterApi from 'twitter-api-v2'

const appOnlyClient = new TwitterApi(process.env['TWITTER_BEARER_TOKEN'] as string)

async function getJsTweets(client: TwitterApi): Promise<void> {
  const jsTweets = await client.v2.searchAll('JavaScript', { 'media.fields': 'url' })
  console.log(jsTweets)
}

getJsTweets(appOnlyClient)
