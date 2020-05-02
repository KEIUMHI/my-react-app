import * as constants from './constants'
import axios from 'axios'

/**
 * 设置首页数据
 * @param {array} topicList 热门标签列表
 * @param {array} articleList 文章列表
 * @param {array} recommendList 推荐列表
 * @param {array} writerList 推荐作者列表
 */
const setHomeData = data => ({
  type: constants.SET_HOME_DATA,
  ...data
})

/**
 * 设置文更多文章列表
 * @param {array} list 文章列表
 */
const setMoreList = (list, page) => ({
  type: constants.SET_MORE_LIST,
  list,
  page
})

/**
 * 获取首页数据
 */
export const getHomeData = () => async dispatch => {
  try {
    const res = await axios.get('/api/home.json')
    dispatch(setHomeData(Object.assign({}, res.data.data)))
  } catch (err) {
    console.log(err)
  }
}

/**
 * 首页加载更多文章列表
 */
export const getMoreList = page => async dispatch => {
  try {
    const res = await axios.get(`/api/articleList.json?page=${page}`)
    dispatch(setMoreList(res.data.data, page))
  } catch (err) {
    console.log(err)
  }
}
