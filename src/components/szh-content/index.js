import React, { memo, lazy, Suspense } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { ContentWrapper } from './style'
import { Avatar } from 'antd';
import avatar from '@/assets/img/avatar.png'
import { menu } from '@/commons/local-data'
// import AnimatedSwitch from '@/utils/AnimatedSwitch' 


const Article = lazy(() => import('@/components/szh-content/cpns/article'))
const About = lazy(() => import('@/components/szh-content/cpns/about'))
const Change = lazy(() => import('@/components/szh-content/cpns/change'))
const Words = lazy(() => import('@/components/szh-content/cpns/words'))
const Editor = lazy(() => import('@/components/szh-content/cpns/editor'))
const ArticleDetail = lazy(() => import('@/components/szh-content/cpns/article/article-detail'))

export default memo(function SZHContent (props) {
  return (
    <ContentWrapper>
      <div className="wrap-v2 content">
        <div className="left">
          <div className="info">
            <div className="avatar">
              <Avatar src={avatar} size={64} className="pic" />
            </div>
            <div className="name">你的一言不合</div>
          </div>
          <div className="list">
            {
              menu.map((item, index) => {
                return (
                  <NavLink exact to={item.link} key={item.title} className="list-select">
                    {item.icon} {item.title}
                  </NavLink>
                )
              })
            }
          </div>
        </div>
        <div className="right">
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              <Redirect exact path="/index" to="/index/article"></Redirect>
              <Redirect exact path="/" to="/index/article"></Redirect>
              <Route exact path="/index/article" component={Article} />
              <Route exact path="/index/about" component={About} />
              <Route exact path="/index/words" component={Words} />
              <Route exact path="/index/change" component={Change} />
              <Route exact path="/index/detail" component={ArticleDetail} />
              <Route exact path="/index/editor" component={Editor} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </ContentWrapper>
  )
})
