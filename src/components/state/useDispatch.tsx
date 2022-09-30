import type React from 'react'
import { createContext, useContext } from 'react'

import type { Actions } from '@/components/state/appReducer'

export const dispatchContext = createContext<React.Dispatch<Actions> | null>(null)

export function useDispatch(): React.Dispatch<Actions> {
  const dispatch = useContext(dispatchContext)
  if (!dispatch) {
    throw new Error('Must be wrapped in Provider')
  }

  return dispatch
}
