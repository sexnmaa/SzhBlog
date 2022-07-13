import React, { memo, useState, useEffect } from 'react'
import { AboutWrapper } from './style'
import avatar from '@/assets/img/avatar.png'
import { Avatar, Progress } from 'antd';

import { CSSTransition } from 'react-transition-group'

export default memo(function About (props) {
  const [animate, setAnimate] = useState(false);
  // console.log(props.location.pathname === '/index/about');
  useEffect(() => {
    setAnimate(props.location.pathname === '/index/about')
  }, [props.location.pathname])
  // console.log(props);
  return ( 
    <CSSTransition in={animate}
      classNames="box"
      timeout={2000}
      unmountOnExit>
      <AboutWrapper>
        <div className="self-introduce">
          <div className="title">个人简介</div>
          <div className="detail szh-flex-between">
            <div className="avatar">
              <Avatar src={avatar} size={64} className="pic"/>
            </div>
            <div className="txt">
              <div className="name">你的一言不合</div>
              <div className=" information">学渣一个，偶尔玩点游戏，现在大部分时间花在搞前端上。只希望可以做自己喜欢做的事情。</div>
            </div>
          </div>
        </div>
        <div className="self-staff">
          <div className="title">个人资料</div>
          <div className="szh-flex-start detail">
            <div className="detail-item">
              <div className="item-title">常用昵称</div>
              <div className="item-content">你的一言不合</div>
            </div>
            <div className="detail-item">
              <div className="item-title">爱好</div>
              <div className="item-content">看电影</div>
            </div>
            <div className="detail-item">
              <div className="item-title">B站</div>
              <div className="item-content">UID:168873343</div>
            </div>
          </div>
        </div>
        <div className="self-point">
          <div className="title">技能点</div>
          <div className="detail">
            <div className="progress">
              <div className="progress_1 szh-flex-between">
                <div className="name">HTML/CSS</div>
                <Progress percent={80} showInfo={false} strokeWidth={12} strokeColor={{
                  '0%': 'rgb(140, 199, 181)',
                  '100%': '#87d068',
                }} />
              </div>
              <div className="progress_2 szh-flex-between">
                <div className="name">JavaScript/TypeScript</div>
                <Progress percent={60} showInfo={false} strokeWidth={12} strokeColor={{
                  '0%': 'rgb(25, 202, 173)',
                  '100%': '#87d068',
                }} />
              </div>
              <div className="progress_3 szh-flex-between">
                <div className="name">node.js</div>
                <Progress percent={50} showInfo={false} strokeWidth={12} strokeColor={{
                  '0%': 'rgb(160, 238, 225)',
                  '100%': 'rgb(190, 237, 199)',
                }} />
              </div>
              <div className="progress_4 szh-flex-between">
                <div className="name">其他</div>
                <Progress percent={30} showInfo={false} strokeWidth={12} strokeColor={{
                  '0%': 'rgb(236, 173, 158)',
                  '100%': 'rgb(230, 206, 172)',
                }} />
              </div>
            </div>
            <div className="info">
              <div className="info_1">前端方面:学习过html、css、JavaScript、TypeScript的语法，学习过jQuery，使用过bootstrap、element-ui、ant-design、echarts等前端UI组件库</div>
              <div className="info_2">前端框架:学习过vue、react等主流前端框架，同时还学习过uniapp，reactNative跨端框架， 也写过微信小程序</div>
              <div className="info_3">后端框架:学习过node.js的Express, Koa框架</div>
              <div className="info_4">总结：基本上算是是前端专精，后面也会认真学一下后端，往全栈发展</div>
            </div>
          </div>
        </div>
      </AboutWrapper>
    </CSSTransition>
  )
})