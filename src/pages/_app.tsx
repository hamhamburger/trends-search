import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { useReducer } from 'react'

import { appReducer } from '@/components/state/appReducer'
import { appStateContext } from '@/components/state/useAppState'
import { dispatchContext } from '@/components/state/useDispatch'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [appState, dispatch] = useReducer(appReducer, {})

  return (
    <dispatchContext.Provider value={dispatch}>
      <appStateContext.Provider value={appState}>
        <Component {...pageProps} />
      </appStateContext.Provider>
    </dispatchContext.Provider>
  )
}

export default MyApp
