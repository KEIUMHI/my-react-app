import styled from 'styled-components'

export const SignWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
  background-color: #f1f1f1;
  .logo {
  }
`

export const SignContainer = styled.div`
  box-sizing: border-box;
  width: 400px;
  margin: 0 auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
`

export const SignHeader = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #969696;
  .link {
    box-sizing: border-padding;
    padding: 10px;
    text-decoration: none;
    font-weight: inherit;
    color: inherit;
    &.active {
      font-weight: 700;
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
    &:hover {
      border-bottom: 2px solid #ea6f5a;
    }
  }
  b {
    padding: 10px;
    font-weight: 700;
  }
`

export const SignMain = styled.div`
  .submit {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    &.sign-in {
      background-color: #3194d0;
      &:hover {
        background-color: #187cb7;
      }
    }
    &.sign-up {
      background-color: #42c02e;
      &:hover {
        background-color: #3db922;
      }
    }
  }
  .tools-bar {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    color: #999;
  }
  .remember-btn {
    display: flex;
    align-items: center;
  }
  .forget-btn {
    cursor: pointer;
    &:hover {
      color: #333;
    }
  }
  .sign-up-msg {
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    a {
      color: #3194d0;
      text-decoration: none;
    }
  }
`

export const SignFooter = styled.div``

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  vertical-align: middle;
`
