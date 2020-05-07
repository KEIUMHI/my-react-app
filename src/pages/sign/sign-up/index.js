import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { SignMain, Input } from '../style'
class SignUp extends PureComponent {
  render() {
    return (
      <SignMain>
        <Input placeholder="你的昵称" />
        <Input placeholder="账号" />
        <Input placeholder="密码" />
        <button className="submit sign-up">注册</button>
        <p className="sign-up-msg">
          点击 “注册” 即表示您同意并愿意遵守简书
          <br />
          <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">
            用户协议
          </a>
          和
          <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">
            隐私政策
          </a>
          。
        </p>
      </SignMain>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SignUp)
