import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  article: {},
  userInfo: {
    recommendArticles: []
  },
  recommendArticles: [],
  backTopVisible: false
})

const setDetailData = (state, action) => {
  return state.merge({
    article: fromJS(action.article),
    userInfo: fromJS(action.userInfo),
    recommendArticles: fromJS(action.recommendArticles)
  })
}

const changeBackTopVisible = (state, action) => {
  return state.set('backTopVisible', fromJS(action.flag))
}

export default (state = defaultState, action) => {
  const types = {
    [constants.SET_DETAIL_DATA]: () => setDetailData(state, action),
    [constants.CHANGE_BACK_TOP_VISIBLE]: () =>
      changeBackTopVisible(state, action)
  }
  if (typeof types[action.type] !== 'function') return state
  return types[action.type]()
}
