export interface BaseData {
  keyword: string
  data: Array<{ month: number; date: number; hour?: number; value: number }>
}

export interface TrendKewordResult {
  rank: number
}

export interface AppState {
  analyticsDatas: { [key: string]: AnalyticsData }
}

export interface AnalyticsData {
  googleInterest?: GoogleInterest
  tweetsCount?: TweetsCount
  stockData?: StockData
}

export interface TweetsCount extends BaseData {
  total: number
}

export interface GoogleInterest extends BaseData {
  data: Array<{ month: number; date: number; value: number }>
}

export interface StockData extends BaseData {
  stockCode: string
}

// export interface Actions = {
//   interface: 'SET_TWITTER_COUNT'
//   payload: { tweetsCount?: TweetsCount }
// }
