import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100vw;
  min-width: 768px;
  height: 58px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  z-index: 99;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background-image: url('https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png');
  background-size: contain;
`

export const Nav = styled.div`
  box-sizing: border-box;
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
`

export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    &.focused {
      color: #fff;
      background-color: #999;
    }
  }
`

export const SearchHistoryWrapper = styled.div`
  position: absolute;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  top: 100%;
  left: 20px;
  width: 250px;
  margin-top: 9px;
  padding: 5px;
  border-radius: 4px;
  &::before {
    content: '';
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`

export const SearchHistoryItem = styled.a.attrs({
  target: '_blank'
})`
  box-sizing: border-box;
  display: block;
  position: relative;
  height: 40px;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: #333;
  .keyword {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    padding-right: 30px;
  }
  .clock {
    float: left;
    margin-right: 10px;
    font-size: 18px;
    color: #787878;
  }
  .remove {
    display: none;
    position: absolute;
    right: 15px;
    top: 10px;
    color: #a0a0a0;
  }
  &:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
    .remove {
      display: block;
      &:hover {
        color: #444;
      }
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 40px;
  font-size: 14px;
  background-color: #eee;
  /* transition: 0.3s; */
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  line-height: 38px;
  &.reg {
    color: #ea6f5a;
  }
  &.writing {
    color: #fff;
    background-color: #ea6f5a;
  }
`
