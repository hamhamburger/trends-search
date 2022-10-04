import { Grid } from '@mui/material'

import BarGraph from './graph/BarGraph'
import DoubleChart from './graph/DoubleChart'
import TweetsGraph from './graph/TweetsGraph'

import { useAppState } from '@/components/state/useAppState'
import type { BaseData } from '@/libs/types'
const Analytics = (): JSX.Element => {
  const { analyticsDatas } = useAppState()
  if (Object.keys(analyticsDatas).length < 1) return <></>

  return (
    <div>
      {Object.keys(analyticsDatas)?.map((keyword: string) => {
        const data = analyticsDatas[keyword]
        if (data === undefined) return <></>

        return (
          <Grid container key={keyword}>
            <Grid item xs={6}>
              {data.tweetsCount ? <TweetsGraph tweetsCount={data.tweetsCount} /> : <></>}
            </Grid>

            <Grid item xs={6}>
              {data.googleInterest ? <BarGraph barData={data.googleInterest} /> : <></>}
            </Grid>
            <Grid item xs={6}>
              {data.stockData ? <BarGraph barData={data.stockData} /> : <></>}
            </Grid>
            <Grid item xs={6}>
              {data.stockData && data.tweetsCount ? (
                <DoubleChart barDatas={[data.stockData, data.tweetsCount as BaseData]} />
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}
export default Analytics
