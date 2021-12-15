import styled from 'styled-components'

export const Animate = styled.div`
  // 很多动画都需要给路由对应组件最外层元素设置position: absolute;

  /* position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; */

.fade-enter {
  opacity: 0;
  transform: scale(0.6)
  }

  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 2000ms ease-out;
  }

  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }

  .fade-exit-active {
    height: 0;
    opacity: 0;
    transform: scale(0);
    transition: all 0ms ease-in;
  }
`