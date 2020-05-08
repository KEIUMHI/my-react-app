import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from '../store'
import { SignMain, Input } from '../style'

class SignIn extends PureComponent {
  render() {
    const { signedIn, handleSignIn } = this.props
    return !signedIn ? (
      <SignMain>
        <div className="input-wrapper">
          <Input
            className="input radius-t"
            placeholder="手机号或邮箱"
            ref={input => {
              this.account = input
            }}
          />
          <i className="iconfont">&#xe89f;</i>
        </div>
        <div className="input-wrapper">
          <Input
            className="input radius-b"
            placeholder="密码"
            type="password"
            ref={input => {
              this.password = input
            }}
          />
          <i className="iconfont">&#xe601;</i>
        </div>
        <div className="tools-bar">
          <div className="remember-btn">
            <input type="checkbox" />
            <span>记住我</span>
          </div>
          <div className="forget-btn">登录遇到问题？</div>
        </div>
        <button
          className="submit sign-in"
          onClick={() => {
            handleSignIn({
              account: this.account.value,
              password: this.password.value
            })
          }}
        >
          登录
        </button>
      </SignMain>
    ) : (
      <Redirect to="/" />
    )
  }
}

const mapState = state => ({
  signedIn: state.getIn(['sign', 'signedIn'])
})

const mapDispatch = dispatch => ({
  handleSignIn(form) {
    console.log(form)
    dispatch(actionCreators.signIn(form))
  }
})

export default connect(mapState, mapDispatch)(SignIn)
