import React, { memo, useState } from 'react'
import { IndexWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { BackTop } from 'antd';

import SZHHeader from '@/components/szh-header'
import SZHFooter from '@/components/szh-footer'
import SZHContent from '@/components/szh-content'
import Login from '@/pages/login'

export default memo(function Index () {
  const [appear, setappear] = useState(false);
  const [back, setBack] = useState(false);
  const close = () => {
    setappear(false)
  }
  const login = () => {
    setappear(true)
  }
  const backTop = () => {
    setBack(true)
    setTimeout(() => {
      setBack(false)
    }, 700)
  }
  // className="backTop"
  return (
    <IndexWrapper>
      <CSSTransition in={appear}
        classNames="box"
        timeout={1000}
        unmountOnExit>
        <Login close={close}></Login>
      </CSSTransition>
      <SZHHeader login={login}></SZHHeader>
      <SZHContent></SZHContent>
      <SZHFooter></SZHFooter>
      <BackTop onClick={backTop} duration={700}>
      <div className={`backTop ${back ? 'backTopClick' : null}`}></div>
    </BackTop>
    </IndexWrapper>
  )
})
