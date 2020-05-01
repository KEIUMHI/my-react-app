import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
`
export const HomeRight = styled.div`
  float: right;
  width: 240px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -10px;
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
