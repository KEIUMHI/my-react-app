import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { BASE_URL, KEY_ENTER } from '../../utils/config'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchHistoryWrapper,
  SearchHistoryItem
} from './style'

class Header extends PureComponent {
  render() {
    const {
      focused,
      searchValue,
      handleInputFocus,
      handleInputBlur,
      handleInputChange,
      handleSearch
    } = this.props

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={e => {
                  e.keyCode === KEY_ENTER && handleSearch(searchValue)
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}
              onMouseDown={() => {
                searchValue && handleSearch(searchValue)
              }}
            >
              &#xe625;
            </i>
            {this.getSearchHistoryArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe600;</i> 写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getSearchHistoryArea(visible) {
    const { searchHistory, handleDeleteSearchHistory } = this.props
    const searchHistoryList = searchHistory.map((item, index) => {
      return (
        <li key={item}>
          <SearchHistoryItem
            href={`${BASE_URL}/search?q=${item}&utm_source=desktop&utm_medium=search-recent`}
            onMouseDown={e => {
              e.target.click()
            }}
          >
            <i className="iconfont clock">&#xe761;</i>
            <span className="keyword">{item}</span>
            <i
              className="iconfont remove"
              onMouseDown={e => {
                e.stopPropagation()
                handleDeleteSearchHistory(index)
              }}
            >
              &#xe615;
            </i>
          </SearchHistoryItem>
        </li>
      )
    })
    return searchHistory.length && visible ? (
      <SearchHistoryWrapper>
        <ul>{searchHistoryList}</ul>
      </SearchHistoryWrapper>
    ) : null
  }
}

const mapStateToProps = state => ({
  focused: state.getIn(['header', 'focused']),
  searchValue: state.getIn(['header', 'searchValue']),
  searchHistory: state.getIn(['header', 'searchHistory'])
})

const mapDispatchToProps = dispatch => ({
  handleInputFocus() {
    const { searchFocus, setSearchHistory } = actionCreators
    dispatch(searchFocus())
    dispatch(setSearchHistory())
  },
  handleInputBlur() {
    const action = actionCreators.searchBlur()
    dispatch(action)
  },
  handleInputChange(e) {
    const action = actionCreators.setSearchValue(e.target.value)
    dispatch(action)
  },
  handleSearch(historyValue) {
    const { setSearchHistory, getSearchData } = actionCreators
    dispatch(setSearchHistory(historyValue))
    dispatch(getSearchData(historyValue))
  },
  handleDeleteSearchHistory(index) {
    const action = actionCreators.deleteSearchHistory(index)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
