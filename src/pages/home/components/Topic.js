import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props
    const getTopicList = topicList.map(item => (
      <TopicItem key={item.get('id')}>
        <img className="topic-pic" src={item.get('imgUrl')} alt="64" />
        {item.get('title')}
      </TopicItem>
    ))
    return <TopicWrapper>{getTopicList}</TopicWrapper>
  }
}

const mapState = state => ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)
