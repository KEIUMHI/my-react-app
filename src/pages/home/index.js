import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'

class Home extends Component {
  render() {
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
      </HomeWrapper>
    )
  }

  componentDidMount() {
    const { getHomeData } = this.props
    getHomeData()
  }
}

const mapDispatch = dispatch => ({
  getHomeData() {
    const action = actionCreators.getHomeData()
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)
