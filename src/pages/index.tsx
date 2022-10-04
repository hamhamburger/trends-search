import type { NextPage } from 'next'

import MyHead from '@/components/MyHead'
import Analytics from '@/components/parts/Analytics'
import DebugButton from '@/components/parts/DebugButton'
import Form from '@/components/parts/form/Form'
const search: NextPage = () => {
  return (
    <div>
      <MyHead />

      <main>
        <Form />
        <Analytics />
        <DebugButton />
      </main>

      <footer></footer>
    </div>
  )
}
export default search
