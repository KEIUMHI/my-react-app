import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { actionCreators } from './store'
import {
  SignWrapper,
  SignContainer,
  SignHeader,
  SignMain,
  SignFooter
} from './style'

class Sign extends PureComponent {
  render() {
    const { signInActive, toggleSignInActive } = this.props
    return (
      <SignWrapper>
        <SignContainer>
          <SignHeader>
            <Link
              className={signInActive ? 'link active' : 'link'}
              to="/sign/sign_in"
              onClick={() => toggleSignInActive(true)}
            >
              登录
            </Link>
            <b>·</b>
            <Link
              className={!signInActive ? 'link active' : 'link'}
              to="/sign/sign_up"
              onClick={() => toggleSignInActive(false)}
            >
              注册
            </Link>
          </SignHeader>
          <SignMain></SignMain>
          <SignFooter></SignFooter>
          {renderRoutes(this.props.route.children)}
        </SignContainer>
      </SignWrapper>
    )
  }
}

const mapState = state => ({
  signInActive: state.getIn(['sign', 'signInActive'])
})

const mapDispatch = dispatch => ({
  toggleSignInActive(flag) {
    dispatch(actionCreators.toggleSignInActive(flag))
  }
})

export default connect(mapState, mapDispatch)(Sign)
