import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { useDispatch } from '@/components/state/useDispatch'
import type { TweetsCount } from '@/libs/types'

type FormInput = {
  keyword: string
  requestTweet: boolean
  requestGoogleInterest: boolean
}

const TrendForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormInput>()
  const dispatch = useDispatch()

  // eslint-disable-next-line no-unused-vars
  const fetchTweetsCount = async (queryParams: URLSearchParams): Promise<void> => {
    const tweetsCountResult = await fetch('/api/tweetsCount' + '?' + queryParams)
    console.log(tweetsCountResult)
    const tweetsCountParsed = await tweetsCountResult.json()
    console.log(tweetsCountParsed)
    if (tweetsCountParsed.message === 'success') {
      const tweets: TweetsCount = tweetsCountParsed.tweets

      dispatch({
        type: 'SET_TWITTER_COUNT',
        payload: { tweetsCount: tweets, keyword: tweets.keyword },
      })
    }
  }

  const fetchGoogleInterest = async (queryParams: URLSearchParams): Promise<void> => {
    const trendResult = await fetch('/api/google-trend' + '?' + queryParams)
    const trendJson = await trendResult.json()
    if (trendJson.message === 'success') {
      dispatch({
        type: 'SET_GOOGLE_INTEREST',
        payload: { googleInterest: trendJson, keyword: trendJson.keyword },
      })
    }
  }

  const onSubmit: SubmitHandler<FormInput> = async (data): Promise<void> => {
    const queryParams = new URLSearchParams(data.keyword)
    console.log(data)
    // const trendResult = await fetch('/api/search' + '?' + queryParams)
    // const trendJson = await trendResult.json()
    // console.log(trendJson)

    // const tweetsInfoResult = await fetch('/api/tweets' + '?' + queryParams)
    // const tweetsInfoJson = await tweetsInfoResult.json()
    // console.log(tweetsInfoJson)
    if (data.requestTweet) {
      fetchTweetsCount(queryParams)
    }
    if (data.requestGoogleInterest) {
      fetchGoogleInterest(queryParams)
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
