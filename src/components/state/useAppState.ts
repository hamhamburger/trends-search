import { createContext, useContext } from 'react'

import type { AppState } from '@/libs/types'

export const appStateContext = createContext<AppState | null>(null)

export function useAppState(): AppState {
  const appState = useContext(appStateContext)
  if (!appState) {
    throw new Error('useAppState must be used within a Provider')
  }

  return appState
}
