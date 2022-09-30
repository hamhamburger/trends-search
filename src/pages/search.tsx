import type { NextPage } from 'next'

import MyHead from '@/components/MyHead'
import TrendForm from '@/components/parts/form/TrendForm'
import TweetsGraph from '@/components/parts/graph/TweetsGraph'
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
