import styled from 'styled-components'
import back_top from '@/assets/img/space-to-top.png'

export const IndexWrapper = styled.div`
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

  .backTop {
    transform: translateY(-100px);
    height: 85px;
    width: 62px;
    background: url(${back_top});
    background-position: -40px -44px;
  }
  .backTopClick {
    animation: move 0.1s steps(7) infinite;
  }
  @keyframes move {
    0% {
        background-position: -40px -44px;
    }
    100% {
        background-position: -1040px -44px;
    }
  }
`