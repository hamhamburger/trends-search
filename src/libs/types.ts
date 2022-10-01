export type TrendKewordResult = {
  rank: number
}

export type AppState = {
  analyticsDatas: { [key: string]: AnalyticsData }
}

export type AnalyticsData = {
  googleInterest?: GoogleInterest
  tweetsCount?: TweetsCount
}

export type TweetsCount = {
  keyword: string
  total: number
  data: Array<{ month: number; date: number; hour: number; count: number }>
}

export type GoogleInterest = {
  keyword: string
  data: Array<{ month: number; date: number; value: number }>
}

// export type Actions = {
//   type: 'SET_TWITTER_COUNT'
//   payload: { tweetsCount?: TweetsCount }
// }
