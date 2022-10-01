import { useAppState } from '@/components/state/useAppState'
const Analytics = (): JSX.Element => {
  const { analyticsDatas } = useAppState()
  console.log(analyticsDatas)

  return <div>Analytics</div>
}
export default Analytics
