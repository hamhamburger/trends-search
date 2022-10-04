import { Button } from '@mui/material'

import { useAppState } from '@/components/state/useAppState'
const DebugButton = (): JSX.Element => {
  const state = useAppState()
  const showAppState = (): void => {
    console.log(state)
  }

  return <Button onClick={showAppState}>Show AppState</Button>
}
export default DebugButton
