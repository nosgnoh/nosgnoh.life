// import { IS_PROD } from 'config'
const IS_PROD = false;

export default {
  log: (...params) => {
    if (!IS_PROD) console.log('🚀 ~ [LOG]:', ...params)
  },
  error: (...params) => {
    console.error('[ERROR]:', ...params)
  },
}
