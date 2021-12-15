import styled from 'styled-components'

export const ArticleItemWrapper = styled.div`
  height: 180px;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  margin: 0rem 2rem 2rem 0;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  overflow: hidden;
  .contentz {
    .img {
      height: 180px;
      width: 320px;
      img {
        width: 320px;
        height: 180px;
        transition: all 1.5s ease;
      }
    }
    .info {
      height: 180px;
      margin: 0 35px 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      animation: backInDown; 
      animation-duration: 1s;
      .title {
        text-decoration: none;
        cursor: pointer;
        font-size: 22px;
        font-weight: 600;
        color: black;
        animation: backInDown; 
        animation-duration: 1s;
        margin: 0;
      }
      .contents {
        display: none;
        animation: fadeOutDown; 
        animation-duration: 1.5s;
        .indruction {
          margin: 10px 0;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .contents {
        .extra {
          color: #777;
          margin-bottom: 3px;
        }
      }
    }
  }
  &:hover {
    .contentz {
      .info {
        justify-content: flex-end;
        animation: pulse; 
        animation-duration: 2s;
        .contents {
          display: block;
          animation: zoomIn; 
          animation-duration: 2s;
        }
      }
      .img {
        width: 320px;
        img {
          transform: scale(1.2);
          transition: all 2s ease;
        }
      }
    }
  }
`