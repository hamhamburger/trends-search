import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { useDispatch } from '@/components/state/useDispatch'

type FormInput = {
  keyword: string
  test: string
  stockCode?: string
  requestTweet: boolean
  requestGoogleInterest: boolean
}

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()
  const dispatch = useDispatch()

  // この辺も共通化していけそう
  // eslint-disable-next-line no-unused-vars
  const fetchTweetsCount = async (keyword: string): Promise<void> => {
    const queryParams = new URLSearchParams({ keyword })
    const response = await fetch('/api/tweetsCount' + '?' + queryParams)
    const result = await response.json()
    if (result.status === 'success') {
      dispatch({
        type: 'SET_TWITTER_COUNT',
        payload: { tweetsCount: result, keyword: result.keyword },
      })
    }
  }

  const fetchGoogleInterest = async (keyword: string): Promise<void> => {
    const queryParams = new URLSearchParams({ keyword })
    const res = await fetch('/api/google-trend' + '?' + queryParams)
    const result = await res.json()
    if (result.status === 'success') {
      dispatch({
        type: 'SET_GOOGLE_INTEREST',
        payload: { googleInterest: result, keyword: result.keyword },
      })
    }
  }

  // eslint-disable-next-line no-unused-vars
  const fetchRecentQuotes = async (stockCode: string, keyword: string): Promise<void> => {
    const queryParams = new URLSearchParams({ stockCode })
    const response = await fetch('/api/jquants' + '?' + queryParams)
    const result = await response.json()
    console.log(keyword)
    if (result.status === 'success') {
      dispatch({
        type: 'SET_STOCKDATA',
        payload: {
          stockData: {
            ...result,
          },
          keyword,
        },
      })
    }
  }

  const fetchYahooFinance = async (stockCode: string, keyword: string): Promise<void> => {
    const queryParams = new URLSearchParams({ stockCode })
    const response = await fetch('/api/yahoo-finance' + '?' + queryParams)
    const result = await response.json()
    if (result.status === 'success') {
      dispatch({
        type: 'SET_STOCKDATA',
        payload: {
          stockData: {
            data: result.data,
            titleLabel: result.titleLabel,
            stockCode,
            keyword,
          },
          keyword,
        },
      })
    }
  }

  const onSubmit: SubmitHandler<FormInput> = async (data): Promise<void> => {
    console.log(errors)
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
          <Stack gap={3}>
            <TextField
              label='キーワード'
              {...register('keyword', { required: 'キーワードを入力してください' })}
              helperText={errors.keyword?.message}
            />
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
            {errors.keyword && <span>キーワードを入力してください</span>}
          </Stack>
        </form>
      </Container>
    </div>
  )
}
export default Form
