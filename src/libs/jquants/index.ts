import axios from 'axios'
import dayjs from 'dayjs'

export default class Jquants {
  idToken: string

  constructor(idToken: string) {
    this.idToken = idToken ? idToken : ''
  }

  async fetchRecentQuotes(code = '86970', days = 7): Promise<unknown> {
    const date = dayjs()
    const result = await axios.get('https://api.jpx-jquants.com/v1/prices/daily_quotes', {
      headers: {
        Authorization: `Bearer ${this.idToken}`,
      },
      params: {
        // ここにクエリパラメータを指定する
        code: 86970,
        from: date.subtract(days, 'days').format('YYYYMMDD'),
        to: date.format('YYYYMMDD'),
      },
    })
    const response = result.data.daily_quotes.map(obj => {
      const date = dayjs(obj.Date)

      return {
        value: obj.Close,
        month: date.month() + 1,
        date: date.date(),
      }
    })

    return { data: response, code: result.data.daily_quotes[0].code }
  }
}
