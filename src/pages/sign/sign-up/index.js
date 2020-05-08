import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { SignMain, Input } from '../style'

class SignUp extends PureComponent {
  render() {
    const { handleSignUp } = this.props
    return (
      <SignMain>
        <div className="input-wrapper">
          <Input
            className="input radius-t"
            placeholder="你的昵称"
            ref={input => {
              this.nickName = input
            }}
          />
          <i className="iconfont">&#xe89f;</i>
        </div>
        <div className="input-wrapper">
          <Input
            className="input"
            placeholder="手机号"
            ref={input => {
              this.phone = input
            }}
          />
          <i className="iconfont">&#xe628;</i>
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
        <button
          className="submit sign-up"
          onClick={() =>
            handleSignUp({
              nickName: this.nickName.value,
              phone: this.phone.value,
              password: this.password.value
            })
          }
        >
          注册
        </button>
        <p className="sign-up-msg">
          点击 “注册” 即表示您同意并愿意遵守简书
          <br />
          {/* eslint-disable-next-line */}
          <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">
            用户协议
          </a>
          和{/* eslint-disable-next-line */}
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

const mapDispatch = dispatch => ({
  handleSignUp(form) {
    console.log(form)
    dispatch(actionCreators.signUp(form))
  }
})

export default connect(mapState, mapDispatch)(SignUp)
