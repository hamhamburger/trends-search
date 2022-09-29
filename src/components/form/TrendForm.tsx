import { Button, Container, Stack, TextField } from '@mui/material'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

type FormInput = {
  keyword: string
}

const TrendForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = async (data): Promise<void> => {
    const queryParams = new URLSearchParams(data)
    console.log(queryParams)

    const result = await fetch('/api/search' + '?' + queryParams)
    const json = await result.json()
    console.log(json)
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
