import type { NextPage } from 'next'

import MyHead from '@/components/MyHead'
import Analytics from '@/components/parts/Analytics'
import DebugButton from '@/components/parts/DebugButton'
import TrendForm from '@/components/parts/form/TrendForm'
const search: NextPage = () => {
  return (
    <div>
      <MyHead />

      <main>
        <TrendForm />
        <Analytics />
        <DebugButton />
      </main>

      <footer></footer>
    </div>
  )
}
export default search
