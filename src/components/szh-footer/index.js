import React, { memo } from 'react'
import { FooterWrapper } from './style'

export default memo(function SZHFooter () {
  return (
    <FooterWrapper>
      <div className="content szh-flex-center">
      © 2021 - 2022 By 你的一言不合
      </div>
    </FooterWrapper>
  )
})
