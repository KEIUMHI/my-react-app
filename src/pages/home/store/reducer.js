import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
})

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
  const types = {
    [constants.SET_HOME_DATA]: () => {
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      })
    }
  }
  if (typeof types[action.type] !== 'function') return state
  return types[action.type]()
}
