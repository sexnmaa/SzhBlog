import styled from 'styled-components'

export const ChangeWrapper = styled.div`
  height: 800px;
  padding: 30px 30px 30px 0;
  overflow-y: scroll;
  .item {
    width: 500px;
    height: 200px;
    overflow: hidden;
    margin-bottom: 20px;
    img {
      width: 100%;
      cursor: pointer;
      margin-top: -50px;
    }
  }
`