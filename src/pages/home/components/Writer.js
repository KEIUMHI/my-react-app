import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem } from '../style'

class Writer extends PureComponent {
  render() {
    const { writerList } = this.props
    const getWriterItem = writerList.map(item => (
      <WriterItem key={item.get('id')}>
        <div className="avatar">
          <img src={item.get('avatar')} alt="avatar" />
        </div>
        <div className="follow">关注</div>
        <div className="name">{item.get('name')}</div>
        <p>
          写了{item.get('wordCount')}字 · {item.get('fans')}喜欢
        </p>
      </WriterItem>
    ))
    return (
      <WriterWrapper>
        <div className="title">
          <span>推荐作者</span>
          <div className="page-change">换一批</div>
        </div>
        <ul>{getWriterItem}</ul>
      </WriterWrapper>
    )
  }
}

const mapState = state => ({
  writerList: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer)
