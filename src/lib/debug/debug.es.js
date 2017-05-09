import debug from 'debug'
import isBrowser from '../isBrowser'

let _debug
const noop = () => undefined

if (isBrowser && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  // Heads Up!
  // https://github.com/visionmedia/debug/pull/331
  //
  // debug now clears storage on load, grab the debug settings before require('debug').
  // We try/catch here as Safari throws on localStorage access in private mode or with cookies disabled.
  let DEBUG
  try {
    DEBUG = window.localStorage.debug
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Semantic-UI-React could not enable debug.')
    console.error(e)
   /* eslint-enable no-console */
  }

  _debug = debug

  // enable what ever settings we got from storage
  _debug.enable(DEBUG)
} else {
  _debug = () => noop
}

export default _debug
