import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props
    const getRecommendItem = recommendList.map(item => (
      // eslint-disable-next-line
      <a href={item.get('link')} target="_blank">
        <RecommendItem
          key={item.get('id')}
          imgUrl={item.get('imgUrl')}
        ></RecommendItem>
      </a>
    ))
    return <RecommendWrapper>{getRecommendItem}</RecommendWrapper>
  }
}

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend)
