import { api as httpApi } from '../api'

export default function ({
  config
}, inject) {
  const getData = url => fetch(`https://swapi.dev/api/${url}`, {
    credentials: 'omit',
    method: 'GET',
    // mode: 'no-cors',
    cache: 'no-cache'
  })
  const api = httpApi(getData)
  inject('api', api)
}
