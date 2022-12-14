/* eslint-disable indent */

import type { AppState, BaseData, StockData, TweetsCount } from '@/libs/types'

export type Actions =
  | {
      type: 'SET_TWITTER_COUNT'
      payload: { tweetsCount: TweetsCount; keyword: string }
    }
  | {
      type: 'SET_GOOGLE_INTEREST'
      payload: { googleInterest: BaseData; keyword: string }
    }
  | {
      type: 'SET_STOCKDATA'
      payload: { stockData: StockData; keyword: string }
    }

export const appReducer = (state: AppState, action: Actions): AppState => {
  switch (action.type) {
    case 'SET_TWITTER_COUNT': {
      const analyticsData = {
        ...state?.analyticsDatas?.[action.payload.keyword],
        tweetsCount: action.payload.tweetsCount,
      }

      return {
        ...state,
        analyticsDatas: { ...state.analyticsDatas, [action.payload.keyword]: analyticsData },
      }
    }
    case 'SET_GOOGLE_INTEREST': {
      const analyticsData = {
        ...state?.analyticsDatas?.[action.payload.keyword],
        googleInterest: action.payload.googleInterest,
      }

      return {
        ...state,
        analyticsDatas: { ...state.analyticsDatas, [action.payload.keyword]: analyticsData },
      }
    }
    case 'SET_STOCKDATA': {
      const analyticsData = {
        ...state?.analyticsDatas?.[action.payload.keyword],
        stockData: action.payload.stockData,
      }

      return {
        ...state,
        analyticsDatas: { ...state.analyticsDatas, [action.payload.keyword]: analyticsData },
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}
