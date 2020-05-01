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
  ],
  recommendList: [
    {
      id: 1,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
      id: 2,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 3,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 4,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ],
  writerList: [
    {
      id: 1,
      name: '邓哲',
      avatar:
        'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      fans: '1.3k',
      wordCount: '433.5k'
    },
    {
      id: 2,
      name: '邓哲',
      avatar:
        'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      fans: '1.3k',
      wordCount: '433.5k'
    },
    {
      id: 3,
      name: '邓哲',
      avatar:
        'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      fans: '1.3k',
      wordCount: '433.5k'
    },
    {
      id: 4,
      name: '邓哲',
      avatar:
        'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      fans: '1.3k',
      wordCount: '433.5k'
    },
    {
      id: 5,
      name: '邓哲',
      avatar:
        'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      fans: '1.3k',
      wordCount: '433.5k'
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
