import {
  api as httpApi
} from '../api'

export default function ({
  config
}, inject) {
  const api = httpApi()
  inject('api', api)
}
