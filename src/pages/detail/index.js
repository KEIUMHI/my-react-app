import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { SCROLL_BACK_HEIGHT } from '../../utils/config'
import { actionCreators } from './store'
import {
  DetailWrapper,
  DetailLeft,
  DetailRight,
  Content,
  Creator,
  CreatorArticle,
  RecommendArticle,
  BackTop
} from './style'

class Detail extends PureComponent {
  render() {
    const { article, userInfo, recommendArticles, backTopVisible } = this.props
    return (
      <div Style="padding: 10px 16px 0;background-color: #f9f9f9;">
        <DetailWrapper>
          <DetailLeft>
            <Content>
              <h1 className="title">{article.get('title')}</h1>
              <Creator>
                <img
                  className="avatar"
                  src="https://upload.jianshu.io/users/upload_avatars/15684874/a2c47b52-34cf-4be7-b9b6-e1d904dea5e4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                  alt="avatar"
                />
                <div className="info">
                  <div className="t">
                    <span className="name">
                      {article.getIn(['creator', 'name'])}
                    </span>
                    <button className="follow">关注</button>
                  </div>
                  <div className="b">
                    <span className="paid">
                      <i className="iconfont">&#xe609;</i>
                      {article.getIn(['creator', 'paid'])}
                    </span>
                    <span>{article.getIn(['creator', 'update'])}</span>
                    <span>字数 {article.getIn(['creator', 'wordCount'])}</span>
                    <span>阅读 {article.getIn(['creator', 'readCount'])}</span>
                  </div>
                </div>
              </Creator>
              <div
                dangerouslySetInnerHTML={{
                  __html: article.get('content')
                }}
              ></div>
            </Content>
          </DetailLeft>
          <DetailRight>
            <CreatorArticle>
              <div className="user">
                <img
                  className="avatar"
                  src={userInfo.get('avatar')}
                  alt="avatar"
                />
                <div Style="margin-left: 8px;">
                  <div className="t">
                    <span className="name">{userInfo.get('name')}</span>
                    <button className="follow">关注</button>
                  </div>
                  <div className="b">
                    总资产{userInfo.get('totalPaid')} (约
                    {userInfo.get('conversion')}元)
                  </div>
                </div>
              </div>
              <div className="articles">
                <ul>
                  {userInfo.get('recommendArticles').map((item, index) => (
                    <li className="article-item" key={index}>
                      <div className="article-name">{item.get('title')}</div>
                      <div className="read-count">
                        阅读 {item.get('readCount')}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CreatorArticle>
            <RecommendArticle id="recommendArticles">
              <h3 className="title">推荐阅读</h3>
              <div className="articles">
                <ul>
                  {recommendArticles.map((item, index) => (
                    <li key={index}>
                      <div className="article-name">{item.get('title')}</div>
                      <div className="read-count">
                        阅读 {item.get('readCount')}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </RecommendArticle>
          </DetailRight>
        </DetailWrapper>
        <BackTop
          className={backTopVisible ? 'show' : 'hide'}
          onClick={this.handleBackTop}
        />
      </div>
    )
  }

  componentDidMount() {
    const {
      getDetailData,
      match: {
        params: { id: detailId }
      }
    } = this.props
    getDetailData(detailId)
    this.bindEvents()
  }

  componentWillUnmount() {
    this.unbindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.changeRecommendArticlesFixed)
    window.addEventListener('scroll', this.props.changeBackTopVisible)
  }

  unbindEvents() {
    window.removeEventListener('scroll', this.changeRecommendArticlesFixed)
    window.removeEventListener('scroll', this.props.changeBackTopVisible)
  }

  changeRecommendArticlesFixed() {
    const dom = document.getElementById('recommendArticles')
    const marginTop = 10
    const paddingTop = 56
    const top = 328 - paddingTop
    const left = dom.offsetLeft
    if (document.documentElement.scrollTop >= top - marginTop) {
      dom.style.boxSizing = 'border-box'
      dom.style.width = '260px'
      dom.style.position = 'fixed'
      dom.style.top = `${marginTop + paddingTop}px`
      dom.style.left = `${left}px`
    } else if (document.documentElement.scrollTop <= top) {
      dom.style.position = 'unset'
    }
  }

  handleBackTop() {
    window.scrollTo(0, 0)
  }
}

const mapState = state => ({
  article: state.getIn(['detail', 'article']),
  userInfo: state.getIn(['detail', 'userInfo']),
  recommendArticles: state.getIn(['detail', 'recommendArticles']),
  backTopVisible: state.getIn(['detail', 'backTopVisible'])
})

const mapDispatch = dispatch => ({
  getDetailData(id) {
    dispatch(actionCreators.getDetailData(id))
  },
  changeBackTopVisible() {
    document.documentElement.scrollTop > SCROLL_BACK_HEIGHT
      ? dispatch(actionCreators.changeBackTopVisible(true))
      : dispatch(actionCreators.changeBackTopVisible(false))
  }
})

export default connect(mapState, mapDispatch)(Detail)
