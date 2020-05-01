import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends Component {
  render() {
    const { recommendList } = this.props
    const getRecommendItem = recommendList.map(item => (
      <RecommendItem
        key={item.get('id')}
        imgUrl={item.get('imgUrl')}
      ></RecommendItem>
    ))
    return <RecommendWrapper>{getRecommendItem}</RecommendWrapper>
  }
}

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend)
