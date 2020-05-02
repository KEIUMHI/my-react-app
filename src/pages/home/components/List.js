import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { ListItem, ListItemInfo, ListItemMeta, LoadMore } from '../style'

class List extends Component {
  render() {
    const { articleList, getMoreList, page } = this.props
    const getListItem = articleList.map((item, index) => (
      <ListItem key={index}>
        {item.get('imgUrl') && (
          <img className="pic" src={item.get('imgUrl')} alt="120" />
        )}
        <ListItemInfo className={!item.get('imgUrl') ? 'no-pic' : ''}>
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
    return (
      <ul>
        {getListItem}
        {articleList.size <= 25 && (
          <LoadMore
            onClick={() => {
              getMoreList(page)
            }}
          >
            阅读更多
          </LoadMore>
        )}
      </ul>
    )
  }
}

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    const action = actionCreators.getMoreList(page)
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(List)
