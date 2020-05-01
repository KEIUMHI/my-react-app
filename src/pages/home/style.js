import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  padding-top: 30px;
  width: 625px;
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  line-height: 32px;
  color: #000;
  background-color: #f7f7f7;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  .pic {
    position: absolute;
    top: 50%;
    right: 0;
    width: 150px;
    height: 100px;
    margin-top: -60px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    cursor: pointer;
  }
`

export const ListItemInfo = styled.div`
  padding-right: 165px;
  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const ListItemMeta = styled.div`
  padding-right: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  a {
    margin-right: 10px;
    text-decoration: none;
    color: #b4b4b4;
  }
  span {
    margin-right: 10px;
    color: #b4b4b4;
  }
  .iconfont {
    margin-right: 5px;
  }
  .jsd-meta {
    color: #ea6f5a;
  }
  .nickname,
  .comment {
    transition: 0.1s ease-in;
    cursor: pointer;
    &:hover {
      color: #787878;
    }
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background-image: url(${props => props.imgUrl});
  background-size: contain;
  cursor: pointer;
`

export const WriterWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #969696;
    .page-change {
      transition: 0.1s ease-in;
      cursor: pointer;
      &:hover {
        color: #787878;
      }
    }
  }
`

export const WriterItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  .avatar,
  .follow,
  .name {
    cursor: pointer;
  }
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img {
      vertical-align: middle;
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
  .name {
    display: block;
    margin-right: 60px;
    padding-top: 5px;
    font-size: 14px;
    text-align: left;
  }
  p {
    margin-top: 2px;
    padding: 0 0 10px;
    font-size: 12px;
    text-align: left;
    color: #969696;
  }
`
