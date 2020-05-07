import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { SCROLL_BACK_HEIGHT } from '../../utils/config'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'

class Home extends PureComponent {
  render() {
    const { backTopVisible } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <a
            href="https://mp.weixin.qq.com/s/wnq47_ACfj61e25ywL8HnQ"
            // eslint-disable-next-line
            target="_blank"
          >
            <img
              className="banner-img"
              src="https://upload.jianshu.io/admin_banners/web_images/4942/f7e1fedab8f5e44e62700ceb873a2d0d71d25140.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt="64"
            />
          </a>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        <BackTop
          className={backTopVisible ? 'show' : 'hide'}
          onClick={this.handleBackTop}
        />
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData()
    this.bindEvents()
  }

  handleBackTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeBackTopVisible)
  }

  unbindEvents() {
    window.removeEventListener('scroll', this.props.changeBackTopVisible)
  }
}

const mapState = state => ({
  backTopVisible: state.getIn(['home', 'backTopVisible'])
})

const mapDispatch = dispatch => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData())
  },
  changeBackTopVisible() {
    document.documentElement.scrollTop > SCROLL_BACK_HEIGHT
      ? dispatch(actionCreators.changeBackTopVisible(true))
      : dispatch(actionCreators.changeBackTopVisible(false))
  }
})

export default connect(mapState, mapDispatch)(Home)
