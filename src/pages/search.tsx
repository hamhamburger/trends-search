import type { NextPage } from 'next'

import MyHead from '@/components/MyHead'
import Analytics from '@/components/parts/Analytics'
import TrendForm from '@/components/parts/form/TrendForm'
const search: NextPage = () => {
  return (
    <div>
      <MyHead />

      <main>
        <TrendForm />
        <Analytics />
      </main>

      <footer></footer>
    </div>
  )
}
export default search
