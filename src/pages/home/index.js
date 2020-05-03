import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { SCROLL_BACK_HEIGHT } from '../.../../../utils/config'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'

class Home extends PureComponent {
  render() {
    const { backTopVisible } = this.props
    return (
      <HomeWrapper>
        {/* <img
          src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          alt="64"
        /> */}
        <HomeLeft>
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
        ></BackTop>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    const { getHomeData } = this.props
    getHomeData()
    this.bindEvents()
  }

  handleBackTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    const { changeBackTopVisible } = this.props
    window.addEventListener('scroll', changeBackTopVisible)
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
