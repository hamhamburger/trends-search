import googleTrends from 'google-trends-api'

const autoComplete = async (): Promise<void> => {
  const result = await googleTrends.autoComplete({
    keyword: 'スプラトゥーン3',
    geo: 'JP',
  })
  console.log(result)
}

const relatedQueries = async (): Promise<void> => {
  const result = await googleTrends.relatedQueries({
    keyword: 'スプラトゥーン3',
    geo: 'JP',
    startTime: new Date('2022-01-01'),
    endTime: new Date('2022-09-01'),
  })
  console.log(result)
}
const relatedTopics = async (): Promise<void> => {
  const result = await googleTrends.relatedTopics({
    keyword: 'スプラトゥーン3',
    geo: 'JP',
  })
  console.log(result)
}

const interestOverTime = async (): Promise<void> => {
  const result = await googleTrends.interestOverTime({
    keyword: 'スプラトゥーン',
    geo: 'JP',
    startTime: new Date('2022-01-01'),
    endTime: new Date('2022-09-28'),
  })
  console.log(result)
}

const interestByRegion = async (): Promise<void> => {
  const result = await googleTrends.interestByRegion({
    keyword: 'スプラトゥーン',
    geo: 'JP',
    hl: 'ja',
    startTime: new Date('2020-01-01'),
    endTime: new Date(),
  })
  console.log(result)
}

const dailyTrends = async (): Promise<void> => {
  const result = await googleTrends.dailyTrends({
    geo: 'JP',
  })
  console.log(result)
}

autoComplete()
relatedQueries()
interestOverTime()
relatedTopics()
dailyTrends()
interestByRegion()
