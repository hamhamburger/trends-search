import { useAppState } from '@/components/state/useAppState'
const TweetsGraph = (): JSX.Element => {
  const { tweetsCount } = useAppState()

  return (
    <>
      <div>Tweet</div>
      {tweetsCount?.data.map(obj => {
        return (
          <div
            key={`${obj.day}+${obj.hour}`}
          >{`${obj.day}日${obj.hour}時 ${obj.count}ツイート`}</div>
        )
      })}
    </>
  )
}
export default TweetsGraph
