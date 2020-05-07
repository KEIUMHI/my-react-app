import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { SignMain, Input } from '../style'

class SignIn extends PureComponent {
  render() {
    return (
      <SignMain>
        <Input placeholder="手机号或邮箱" />
        <Input placeholder="密码" />
        <div className="tools-bar">
          <div className="remember-btn">
            <input type="checkbox" />
            <span>记住我</span>
          </div>
          <div className="forget-btn">登录遇到问题？</div>
        </div>
        <button className="submit sign-in">登录</button>
      </SignMain>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SignIn)
