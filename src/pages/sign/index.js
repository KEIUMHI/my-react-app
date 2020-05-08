import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {
  SignWrapper,
  SignContainer,
  SignHeader,
  SignMain,
  SignFooter
} from './style'

class Sign extends PureComponent {
  render() {
    const isSignInActive = () =>
      this.props.location.pathname.indexOf('sign_in') > -1
    return (
      <SignWrapper>
        <SignContainer>
          <SignHeader>
            <Link
              className={isSignInActive() ? 'link active' : 'link'}
              to="/sign/sign_in"
            >
              登录
            </Link>
            <b>·</b>
            <Link
              className={!isSignInActive() ? 'link active' : 'link'}
              to="/sign/sign_up"
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

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(Sign)
