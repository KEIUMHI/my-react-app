import styled from 'styled-components'

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 1000px;
  min-height: 100vh;
  margin: 0 auto 10px;
  border-radius: 4px;
`

export const DetailLeft = styled.div`
  float: left;
  width: 730px;
`

export const DetailRight = styled.div`
  float: right;
  width: 260px;
`

export const Creator = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  .avatar {
    display: block;
    border-radius: 50%;
    border: 1px solid #eee;
    min-width: 48px;
    min-height: 48px;
    width: 48px;
    height: 48px;
    margin-bottom: 0;
  }
  .info {
    margin-left: 8px;
    .t {
      margin-bottom: 6px;
      .name {
        color: #2d2d2d;
        font-weight: 500;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .follow {
        padding: 2px 12px;
        font-size: 12px;
        border-radius: 50px;
        border-color: #ec7259;
        color: #ec7259;
        background-color: #fff;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
          background-color: #fef8f7;
        }
      }
    }
    .b {
      display: flex;
      color: #969696;
      .paid {
        color: #ec7259;
      }
    }
    .t,
    .b {
      & > :not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`

export const Content = styled.div`
  padding: 24px;
  background-color: #fff;
  .title {
    margin-bottom: 0.5em;
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    text-rendering: optimizelegibility;
    color: #404040;
  }
  p {
    margin-bottom: 20px;
    font-size: 16px;
    word-break: break-word;
  }
  img {
    width: 100%;
    margin-bottom: 25px;
  }
`

export const CreatorArticle = styled.div`
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
  .user {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;
    .avatar {
      display: block;
      border-radius: 50%;
      border: 1px solid #eee;
      min-width: 48px;
      min-height: 48px;
      width: 48px;
      height: 48px;
    }
    .t {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
      .name {
        color: #2d2d2d;
        font-weight: 500;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .follow {
        padding: 2px 9px;
        font-size: 12px;
        border-radius: 50px;
        border-color: #ec7259;
        color: #ec7259;
        background-color: #fff;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
          background-color: #fef8f7;
        }
      }
      & > :not(:last-child) {
        margin-right: 10px;
      }
    }
    .b {
      color: #969696;
      font-size: 12px;
    }
  }
  .articles {
    li ~ li {
      margin-top: 10px;
    }
    .article-name {
      font-size: 14px;
      line-height: 22px;
      color: #2d2d2d;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .read-count {
      font-size: 12px;
      color: #969696;
    }
  }
`

export const RecommendArticle = styled.div`
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-left: 12px;
    border-left: 4px solid #ec7259;
    font-size: 18px;
    font-weight: 500;
    height: 20px;
    line-height: 20px;
  }
  li ~ li {
    margin-top: 12px;
  }
  .article-name {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .read-count {
    font-size: 12px;
    color: #969696;
  }
`

export const Like = styled.div``

export const BackTop = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 10;
  width: 40px;
  height: 40px;
  background-color: #fff;
  cursor: pointer;
  &.show {
    visibility: visible;
  }
  &.hide {
    visibility: hidden;
  }
  &::before {
    content: '';
    border: 7px solid transparent;
    border-bottom-color: #666;
    transform: translateY(-25%);
  }
`
