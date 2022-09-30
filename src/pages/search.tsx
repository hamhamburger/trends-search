import type { NextPage } from 'next'

import TrendForm from '@/components/form/TrendForm'
import TweetsGraph from '@/components/graph/TweetsGraph'
import MyHead from '@/components/MyHead'
const search: NextPage = () => {
  return (
    <div>
      <MyHead />

      <main>
        <TrendForm />
        <TweetsGraph />
      </main>

      <footer></footer>
    </div>
  )
}
export default search
