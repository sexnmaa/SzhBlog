import styled from 'styled-components'
import bg from '@/assets/img/bg_mine.webp'
import line from '@/assets/img/line_wave_w.webp'
import bg_mine from '@/assets/img/bg_mine_title.webp'
import bg_staff from '@/assets/img/bg_staff.webp'

export const AboutWrapper = styled.div`
  min-height: 800px;
  // 动画
  .box-enter {
  opacity: 0;
  transform: scale(0.6)
  }

  .box-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 1000ms;
  }

  .box-exit {
    opacity: 1;
    transform: scale(1);
  }

  .box-exit-active {
    opacity: 0;
    transform: scale(.6);
    transition: all 1000ms
  }
  background-color: #fff;
  background-image: url(${bg});
  background-size: 690px;
  padding-bottom: 40px;
  .self-introduce {
    background-image: url(${bg_mine});
    background-size: 690px;
    background-position: center;
    padding: 30px 0 100px 30px;
    color: #fff;
    .title {
      width: 120px;
      font-size: 24px;
      background-image: url(${line});
      background-repeat: repeat-x;
      background-position: 0 bottom;
      padding: 0 3px 15px 3px;
      margin-bottom: 20px;
    }
    .detail {
      .avatar {
        margin: 0 30px 40px 30px;
        cursor: pointer;
        .pic {
          transition: all 1s ease;
        }
        .pic:hover {
          transform: scale(1.2);
          transition: all 1s ease;
        }
      }
      .txt {
        border-bottom: 2px dashed #ccc;
        padding-bottom: 20px;
        .name {
          font-size: 30px;
          margin-bottom: 10px;
        }
        .information {
          font-size: 16px;
        }
      }
    }
  }
  .self-staff { 
    position: relative;
    padding-left: 30px;
    padding-top: 30px;
    &::after {
      content: '';
      display: block;
      width: 690px;
      height: 82px;
      position: absolute;
      left: 0;
      top: -82px;
      background-image: url(${bg_staff});
      background-repeat: repeat-x;
      background-size: 690px;
      background-position: -390px bottom;
    }
    .title {
      width: 120px;
      padding-bottom: 5px;
      font-size: 18px;
      color: #ffa9be;
      border-bottom: 2px solid #ffa9be;
    }
    .detail {
      margin: 20px 0 0 50px;
      .detail-item {
        color: #777790;
        margin: 2px 12px 0 0;
        .item-title {
          font-size: 10px;
          border-bottom: 2px solid #777790;
        }
        .item-content {
          font-size: 20px;
        }
      }
    }
  }
  .self-point {
    padding-left: 30px;
    margin-top: 30px;
    .title {
      width: 120px;
      padding-bottom: 5px;
      font-size: 18px;
      color: orange;
      border-bottom: 2px solid orange;
    }
    .detail {
      margin-top: 40px;
      .progress {
        .progress_1,
        .progress_2,
        .progress_3,
        .progress_4 {
          margin-bottom: 15px;
          width: 500px;
          .name {
            width: 200px;
          }
        }
        .progress_1  {
          color: rgb(140, 199, 181);
        }
        .progress_2  {
          color: rgb(25, 202, 173);
        }
        .progress_3  {
          color: rgb(160, 238, 225);
        }
        .progress_4  {
          color: rgb(236, 173, 158);
        }
      }
      .info {
        font-size: 17px;
        margin-top: 20px;
        div {
          margin-bottom: 10px;
        }
        .info_1 {
          color: rgb(140, 199, 181);
        }
        .info_2 {
          color: rgb(25, 202, 173);
        }
        .info_3 {
          color: rgb(160, 238, 225);
        }
        .info_4 {
          color: rgb(236, 173, 158);
        }
      }
    }
  }
`