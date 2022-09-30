export type TrendKewordResult = {
  rank: number
}

export type AppState = {
  tweetsCount?: TweetsCount
}

type

export type TweetsCount = {
  keyword: string
  total: number
  data: Array<{ month: number; day: number; hour: number; count: number }>
}

export type Actions = {
  type: 'SET_TWITTER_COUNT'
  payload: { tweetsCount?: TweetsCount }
}
