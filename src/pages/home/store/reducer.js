import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  backTopVisible: false
})

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
  const types = {
    [constants.SET_HOME_DATA]: () => setHomeData(state, action),
    [constants.SET_MORE_LIST]: () => setMoreList(state, action),
    [constants.CHANGE_BACK_TOP_VISIBLE]: () =>
      changeBackTopVisible(state, action)
  }
  if (typeof types[action.type] !== 'function') return state
  return types[action.type]()
}

const setHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList)
  })
}

const setMoreList = (state, action) => {
  const nextPage = action.page + 1
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.list)),
    articlePage: fromJS(nextPage)
  })
}

const changeBackTopVisible = (state, action) =>
  state.set('backTopVisible', fromJS(action.flag))
