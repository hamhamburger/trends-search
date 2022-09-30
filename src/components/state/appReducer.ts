/* eslint-disable indent */

import type { AppState, TweetsCount } from '@/libs/types'

export type Actions =
  | {
      type: 'SET_TWITTER_COUNT'
      payload: { tweetsCount: TweetsCount }
    }
  | {
      type: 'SET_GOOGLE_SEARCH_VOLUME'
      payload: { tweetsCount: TweetsCount }
    }

export const appReducer = (state: AppState, action: Actions): AppState => {
  switch (action.type) {
    case 'SET_TWITTER_COUNT':
      return { ...state, tweetsCount: action.payload.tweetsCount }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
