import { Button, Container, Stack, TextField } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { useDispatch } from '@/components/state/useDispatch'
import { mock } from '@/mock'
type FormInput = {
  keyword: string
}

const TrendForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormInput>()
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<FormInput> = async (data): Promise<void> => {
    // const queryParams = new URLSearchParams(data)

    // const trendResult = await fetch('/api/search' + '?' + queryParams)
    // const trendJson = await trendResult.json()
    // console.log(trendJson)

    // const tweetsInfoResult = await fetch('/api/tweets' + '?' + queryParams)
    // const tweetsInfoJson = await tweetsInfoResult.json()
    // console.log(tweetsInfoJson)

    // const tweetsCountResult = await fetch('/api/tweetsCount' + '?' + queryParams)

    console.log(mock)
    {
      // const parsed = await tweetsCountResult.json()
      // const tweets: TweetsCount = parsed.tweets
      dispatch({ type: 'SET_TWITTER_COUNT', payload: { tweetsCount: mock } })
    }
  }

  return (
    <div>
      <Container sx={{ padding: '10px' }}>
        <form>
          <Stack>
            <TextField label='キーワード' {...register('keyword')} />
            <Button onClick={handleSubmit(onSubmit)}>検索</Button>
          </Stack>
        </form>
      </Container>
    </div>
  )
}
export default TrendForm
