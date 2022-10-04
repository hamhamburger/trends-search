export interface ResultData {
  status: string
  message?: string
  keyword?: string
  titleLabel?: string //
  data?: Array<{ value: number; dateTime: Date }>
}

export interface YahooFinanceResult extends ResultData {
  code?: string
}

export interface TweetsCountResult extends ResultData {
  total?: number
}
export interface BaseData {
  keyword: string // データを管理するキー
  titleLabel: string
  data: Array<{ value: number; dateTime: Date }>
}

export interface TrendKewordResult {
  rank: number
}

export interface AppState {
  analyticsDatas: { [key: string]: AnalyticsData }
}

export interface AnalyticsData {
  googleInterest?: BaseData
  tweetsCount?: TweetsCount
  stockData?: StockData
}

export interface TweetsCount extends BaseData {
  total: number
}

export interface StockData extends BaseData {
  stockCode: string
}

// export interface Actions = {
//   interface: 'SET_TWITTER_COUNT'
//   payload: { tweetsCount?: TweetsCount }
// }
