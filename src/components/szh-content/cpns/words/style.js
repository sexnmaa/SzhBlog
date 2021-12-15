import styled from 'styled-components'

export const WordsWrapper = styled.div`
  height: 800px;
  position: relative;
  .message {
    position: absolute;
    top: 150px;
    left: 130px;
    font-size: 30px;
    color: #fff;
    animation: disappear 4s forwards;
  }
  @keyframes disappear {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .ipt {
    margin: 0 0 10px 60px;
    width: 400px;
    display: flex;
    align-items: center;
    .btn {
      margin-left: 15px;
    }
  }
`