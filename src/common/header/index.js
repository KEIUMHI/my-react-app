import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

const Header = props => {
  const { focused, handleInputFocus, handleInputBlur } = props

  return (
    <HeaderWrapper>
      <Logo />
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe625;</i>
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

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus()
      dispatch(action)
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
