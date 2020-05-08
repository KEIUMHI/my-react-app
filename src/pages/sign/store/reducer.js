import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  signedIn: false
})

const changeSignedIn = (state, action) =>
  state.set('signedIn', fromJS(action.flag))

export default (state = defaultState, action) => {
  const types = {
    [constants.CHANGE_SIGNED_IN]: () => changeSignedIn(state, action)
  }
  if (typeof types[action.type] !== 'function') return state
  return types[action.type]()
}
