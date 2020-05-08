import * as constants from './constants'

const changeSignedIn = flag => ({
  type: constants.CHANGE_SIGNED_IN,
  flag
})

export const signIn = form => dispatch => {
  const phoneReg = new RegExp(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/)
  const emailReg = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  )
  if (!form.account) {
    alert('您还没有输入账号')
    return
  }

  if (!phoneReg.test(form.account) && !emailReg.test(form.account)) {
    !phoneReg.test(form.account) && alert('您输入的不是正确的手机号')
    !emailReg.test(form.account) && alert('您输入的不是正确的邮箱')
    return
  }

  if (form.password.length < 6) {
    alert('密码长度不得小于6')
    return
  }

  alert('登录成功')

  dispatch(changeSignedIn(true))
}

export const signUp = form => dispatch => {
  const phoneReg = new RegExp(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/)

  if (!form.nickName) {
    alert('昵称不得为空')
    return
  }

  if (!phoneReg.test(form.phone)) {
    alert('手机号格式错误')
    return
  }

  if (form.password.length < 6) {
    alert('密码长度不得小于6')
    return
  }

  alert('注册成功')
}

export const signOut = () => dispatch => {
  alert('注销成功')

  dispatch(changeSignedIn(false))
}
