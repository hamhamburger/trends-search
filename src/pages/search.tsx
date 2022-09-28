import type { NextPage } from 'next'

import TrendForm from '@/components/form/TrendForm'
import MyHead from '@/components/MyHead'
const search: NextPage = () => {
  return (
    <div>
      <MyHead />

      <main>
        <TrendForm />
      </main>

      <footer></footer>
    </div>
  )
}
export default search
