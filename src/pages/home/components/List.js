import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemInfo, ListItemMeta } from '../style'

class List extends Component {
  render() {
    const { articleList } = this.props
    const getListItem = articleList.map(item => (
      <ListItem key={item.get('id')}>
        <img className="pic" src={item.get('imgUrl')} alt="120" />
        <ListItemInfo>
          <h3 className="title">{item.get('title')}</h3>
          <p className="desc">{item.get('desc')}</p>
        </ListItemInfo>
        <ListItemMeta>
          <span className="jsd-meta">
            <i className="iconfont">&#xe609;</i>
            {item.get('paid')}
          </span>
          <a className="nickname" href="/#">
            {item.get('nickname')}
          </a>
          <a className="comment" href="/#">
            <i className="iconfont">&#xe6b2;</i>
            {item.get('commentCount')}
          </a>
          <span>
            <i className="iconfont">&#xe642;</i>
            {item.get('likeCount')}
          </span>
        </ListItemMeta>
      </ListItem>
    ))
    return <ul>{getListItem}</ul>
  }
}

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List)
