import * as constants from './constants'
import { fromJS } from 'immutable'
import { BASE_URL, MAX_SEARCH_HISTORY } from '../../../utils/config'
import { setLocalStorage, getLocalStorage } from '../../../utils/localStorage'

const defaultState = fromJS({
  focused: false,
  searchValue: '',
  searchHistory: []
})

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
  const types = {
    [constants.SEARCH_FOCUS]: () => searchFocus(state, action),
    [constants.SEARCH_BLUR]: () => searchBlur(state, action),
    [constants.SET_SEARCH_VALUE]: () => setSearchValue(state, action),
    [constants.SET_SEARCH_HISTORY]: () => setSearchHistory(state, action),
    [constants.DELETE_SEARCH_HISTORY]: () => deleteSearchHistory(state, action),
    [constants.GET_SEARCH_DATA]: () => getSearchData(state, action)
  }
  if (typeof types[action.type] !== 'function') return state
  return types[action.type]()
}

const searchFocus = state => state.set('focused', true)
const searchBlur = state => state.set('focused', false)
const setSearchValue = (state, action) => state.set('searchValue', action.value)
const setSearchHistory = (state, action) => {
  if (action.value) {
    const searchHistory = state.get('searchHistory')
    // 检查搜索历史记录中是否存在相同的关键字
    if (!searchHistory.includes(action.value)) {
      searchHistory.unshift(action.value)
      // 设置搜索历史记录最大长度
      searchHistory.length > MAX_SEARCH_HISTORY && searchHistory.pop()
      // 设置本地缓存
      setLocalStorage('search-history', searchHistory)
    }
    return state.set({
      searchHistory
    })
  } else {
    const searchHistory = getLocalStorage('search-history') || []
    return state.set('searchHistory', searchHistory)
  }
}
const deleteSearchHistory = (state, action) => {
  const searchHistory = state
    .get('searchHistory')
    .filter((item, i) => i !== action.index)
  setLocalStorage('search-history', searchHistory)
  return state.set('searchHistory', searchHistory)
}
const getSearchData = (state, action) => {
  window.open(
    `${BASE_URL}/search?q=${action.value}&utm_source=desktop&utm_medium=search-recent`,
    '_blank'
  )
  return state
}
