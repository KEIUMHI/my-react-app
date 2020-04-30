import * as constants from './constants'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const setSearchValue = value => ({
  type: constants.SET_SEARCH_VALUE,
  value
})

export const setSearchHistory = value => ({
  type: constants.SET_SEARCH_HISTORY,
  value
})

export const deleteSearchHistory = index => ({
  type: constants.DELETE_SEARCH_HISTORY,
  index
})

export const getSearchData = value => ({
  type: constants.GET_SEARCH_DATA,
  value
})
