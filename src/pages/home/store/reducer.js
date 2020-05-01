// import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '读书',
      imgUrl:
        'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
  ],
  articleList: [
    {
      id: 1,
      title: '疫情，让我认识到了老婆原来是个农村人',
      desc:
        '我和老婆结婚已经八年了，在这八年当中，我们几乎是天天吵架，也不知道是为啥吵架，反正总能有话题吵架。几度我们到了离婚的边缘，就算没有离婚，日子也...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/18428859-45ae4e678de02148.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      nickname: '四点工作室',
      paid: 35.6,
      likeCount: 345,
      commentCount: 534
    },
    {
      id: 2,
      title: '疫情，让我认识到了老婆原来是个农村人',
      desc:
        '我和老婆结婚已经八年了，在这八年当中，我们几乎是天天吵架，也不知道是为啥吵架，反正总能有话题吵架。几度我们到了离婚的边缘，就算没有离婚，日子也...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/18428859-45ae4e678de02148.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      nickname: '四点工作室',
      paid: 35.6,
      likeCount: 345,
      commentCount: 534
    }
  ]
})

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
  const types = {}
  if (typeof types[action.type] !== 'function') {
    return state
  }
  return types[action.type]()
}
