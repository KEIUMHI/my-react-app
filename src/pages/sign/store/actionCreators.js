import * as constants from './constants'

export const toggleSignInActive = flag => ({
  type: constants.CHANGE_SIGN_IN_ACTIVE,
  flag
})
