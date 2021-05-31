import axios from 'axios'

export const FakeJsonClient = axios.create({
  baseURL: 'https://app.fakejson.com/q'
})

FakeJsonClient.interceptors.request.use((values) => {
  const token = 'oIcumXyE98JwLDguIrw0OA'
  const { data, ...rest } = values
  return {
    data: { token, ...data },
    ...rest
  }
})

export const getFakeUsers = () => {
  return FakeJsonClient.post<any[]>('', {
    data: {
      id: 'personNickname',
      name: 'nameFirst',
      email: 'internetEmail',
      phone: 'phoneHome',
      _repeat: 10
    }
  }).then((res) => res.data)
}
