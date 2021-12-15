import styled from 'styled-components'

export const ContentWrapper = styled.div`
  .content { 
    min-height: 700px;
    display: flex;
    background: white;
    /* min-height: 80vh; */
    /* width: 60%; */
    background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
    );
    border-radius: 2rem;
    z-index: 2;
    backdrop-filter: blur(3px);
    justify-content: space-between;
    overflow: hidden;
    .left {
      /* height: 100%; */
      padding-top: 40px;
      width: 180px;
      background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
      );
      border-radius: 2rem;
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        .avatar {
          cursor: pointer;
          .pic {
            transition: all 1s ease;
          }
          .pic:hover {
            transform: scale(1.3) rotate(360deg);
            transition: all 1s ease;
          }
        }
        .name {
          font-size: 18px;
          margin-top: 8px;
          font-weight: 600;
          opacity: 0.8;
        }
      }
      .list {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        a {
          color: black;
        }
        .list-select {
          text-decoration: none;
          width: 120px;
          margin-top: 20px;
          cursor: pointer;
          .anticon-smile {
            color: #84CA22;
          }
          .anticon-skin {
            color: #909399;
          }
          .anticon-message {
            color: #F25D8E;
          }
          .anticon-container {
            color: #01AAED;
          }
          .anticon-home {
            color: #fff;
          }
          .anticon-edit {
            color: #23C0BE;
          }
        }
        .active {
          color: orange;
          transform: scale(1.2);
          span {
            color: orange!important;
          }
        }
      }
    }
    .right {
      width: 690px;
      min-height: 800px;
    }
  }
`