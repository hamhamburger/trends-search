import TweetsGraph from './graph/TweetsGraph'

import { useAppState } from '@/components/state/useAppState'
const Analytics = (): JSX.Element => {
  const { analyticsDatas } = useAppState()
  if (Object.keys(analyticsDatas).length < 1) return <></>
  console.log(Object.keys(analyticsDatas))

  return (
    <div>
      {Object.keys(analyticsDatas)?.map((keyword: string) => {
        const data = analyticsDatas[keyword]
        if (data === undefined) return <></>

        return (
          <div key={keyword}>
            {data.tweetsCount ? <TweetsGraph tweetsCount={data.tweetsCount} /> : <></>}
          </div>
        )
      })}
    </div>
  )
}
export default Analytics
