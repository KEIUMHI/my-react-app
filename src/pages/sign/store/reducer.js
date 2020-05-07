import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  signInActive: true
})

const toggleSignInActive = (state, action) =>
  state.set('signInActive', fromJS(action.flag))

export default (state = defaultState, action) => {
  const types = {
    [constants.CHANGE_SIGN_IN_ACTIVE]: () => toggleSignInActive(state, action)
  }
  if (typeof types[action.type] !== 'function') return state
  return types[action.type]()
}
