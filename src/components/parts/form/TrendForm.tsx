import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { useDispatch } from '@/components/state/useDispatch'
import type { TweetsCount } from '@/libs/types'

type FormInput = {
  keyword: string
  stockCode?: string
  requestTweet: boolean
  requestGoogleInterest: boolean
}

const TrendForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormInput>()
  const dispatch = useDispatch()

  // eslint-disable-next-line no-unused-vars
  const fetchTweetsCount = async (keyword: string): Promise<void> => {
    const queryParams = new URLSearchParams({ keyword })
    const tweetsCountResult = await fetch('/api/tweetsCount' + '?' + queryParams)
    const tweetsCountParsed = await tweetsCountResult.json()
    if (tweetsCountParsed.status === 'success') {
      const tweets: TweetsCount = tweetsCountParsed.data

      dispatch({
        type: 'SET_TWITTER_COUNT',
        payload: { tweetsCount: tweets, keyword: tweets.keyword },
      })
    }
  }

  const fetchGoogleInterest = async (keyword: string): Promise<void> => {
    const queryParams = new URLSearchParams({ keyword })
    const trendResult = await fetch('/api/google-trend' + '?' + queryParams)
    const trendJson = await trendResult.json()
    if (trendJson.status === 'success') {
      dispatch({
        type: 'SET_GOOGLE_INTEREST',
        payload: { googleInterest: trendJson, keyword: trendJson.keyword },
      })
    }
  }

  // eslint-disable-next-line no-unused-vars
  const fetchRecentQuotes = async (stockCode: string, keyword: string): Promise<void> => {
    const queryParams = new URLSearchParams({ stockCode })
    const res = await fetch('/api/jquants' + '?' + queryParams)
    const result = await res.json()
    console.log(keyword)
    if (result.status === 'success') {
      dispatch({
        type: 'SET_STOCKDATA',
        payload: {
          stockData: {
            data: result.data,
            stockCode,
            keyword,
          },
          keyword,
        },
      })
    }
  }

  const fetchYahooFinance = async (stockCode: string, keyword: string): Promise<void> => {
    const queryParams = new URLSearchParams({ stockCode })
    const res = await fetch('/api/yahoo-finance' + '?' + queryParams)
    const result = await res.json()
    console.log(result)
    if (result.status === 'success') {
      dispatch({
        type: 'SET_STOCKDATA',
        payload: {
          stockData: {
            data: result.data,
            stockCode,
            keyword,
          },
          keyword,
        },
      })
    }
  }

  const onSubmit: SubmitHandler<FormInput> = async (data): Promise<void> => {
    // const tweetsInfoResult = await fetch('/api/tweets' + '?' + queryParams)
    // const tweetsInfoJson = await tweetsInfoResult.json()
    // console.log(tweetsInfoJson)
    if (data.requestTweet) {
      fetchTweetsCount(data.keyword)
    }
    if (data.requestGoogleInterest) {
      fetchGoogleInterest(data.keyword)
    }
    if (data.stockCode) {
      fetchYahooFinance(data.stockCode, data.keyword)
    }
    //
    // fetchTweetsCount(queryParams)
  }

  return (
    <div>
      <Container sx={{ padding: '10px' }}>
        <form>
          <Stack>
            <TextField label='キーワード' {...register('keyword')} />
            <TextField label='証券コード' {...register('stockCode')} />
            <Box sx={{ display: 'flex' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked {...register('requestTweet')} />}
                label='ツイート数'
              />
              <FormControlLabel
                control={<Checkbox defaultChecked {...register('requestGoogleInterest')} />}
                label='Googleトレンド'
              />
            </Box>
            <Button onClick={handleSubmit(onSubmit)}>検索</Button>
          </Stack>
        </form>
      </Container>
    </div>
  )
}
export default TrendForm
