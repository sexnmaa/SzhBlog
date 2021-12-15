import React, { memo } from 'react'
import { ArticleItemWrapper } from './style'
import {NavLink} from 'react-router-dom'
import {
  FieldTimeOutlined,
  CommentOutlined,
  LikeOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs'

export default memo(function ArticleItem (props) {
  const { title, subtitle,url, updateAt, thumbs_up, comment, id } = props.info
  // const toDetail = () => {
  //   console.log(1);
    // props.history.push('/index/deatil')
  // }
  return (
    <ArticleItemWrapper>
      <div className="szh-flex-between contentz">
        <div className="info">
          <NavLink to={{pathname:'/index/detail',state:{id}}} className="title" >{title}</NavLink>
          <div className="contents">
            <div className="indruction">{subtitle}</div>
            <div className="extra szh-flex-between">
              <div><FieldTimeOutlined />{dayjs(updateAt).format('YYYY-MM-DD')}</div>
              <div><CommentOutlined />{comment}条评论</div>
              <div><LikeOutlined />{thumbs_up}人点赞</div>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={url} alt="" />
        </div>
      </div>
    </ArticleItemWrapper>
  )
})
