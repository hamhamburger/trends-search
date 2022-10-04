// /* eslint-disable indent */
// import { createContext, useContext, useReducer } from 'react'

// import type { AppStore, TweetsCount } from '@/libs/types'

// const TweetCountContext = createContext({})

// type Actions = {
//   type: 'SET_TWITTER_COUNT'
//   payload: { tweetsCount?: TweetsCount}
// }

// const appReducer = (state: AppStore, action: Actions): AppStore => {
//   switch (action.type) {
//     case 'SET_TWITTER_COUNT':
//       return {
//         ...state,
//       }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`)
//     }
//   }
// }

// const initialState = {}

// const useAppStore = () => {
//   const context = useContext(TweetCountContext)
//   if (context === undefined) {
//     throw new Error('useAppStore must be used within a AppProvider')
//   }

//   return context
// }

// const TweetCountProvider = ({ children }:{children:JSX.Element | JSX.Element[]}): JSX.Element => {
//   const [state, dispatch] = useReducer(appReducer, initialState)
//   const value = { state, dispatch }

//   return <TweetCountContext.Provider value={value}>{children}</TweetCountContext.Provider>
// }

// export { TweetCountProvider, useAppStore }
