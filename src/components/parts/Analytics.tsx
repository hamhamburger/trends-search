import { Grid } from '@mui/material'

import GenericBarGraph from './graph/GenericBarGraph'
import GoogleInterestGraph from './graph/GoogleInterestGraph'
import TweetsGraph from './graph/TweetsGraph'

import { useAppState } from '@/components/state/useAppState'
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
              {data.googleInterest ? (
                <GoogleInterestGraph googleInterest={data.googleInterest} />
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={6}>
              {data.stockData ? <GenericBarGraph barData={data.stockData} /> : <></>}
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}
export default Analytics
