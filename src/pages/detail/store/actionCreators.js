import * as constants from './constants'
import axios from 'axios'

const setDetailData = data => ({
  type: constants.SET_DETAIL_DATA,
  ...data
})

export const getDetailData = id => async dispatch => {
  try {
    const res = await axios.get(`/api/detail.json?id=${id}`)
    console.log(res)
    dispatch(setDetailData(res.data.data))
  } catch (err) {
    console.log(err)
  }
}

/**
 * 显示隐藏回到顶部
 */
export const changeBackTopVisible = flag => ({
  type: constants.CHANGE_BACK_TOP_VISIBLE,
  flag
})
