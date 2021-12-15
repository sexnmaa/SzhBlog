import React, { memo, useEffect, useState } from 'react'
import { DetailWrapper } from './style'
import {
  FieldTimeOutlined,
  CommentOutlined,
  LikeOutlined,
  RollbackOutlined
} from '@ant-design/icons';
import { Button } from 'antd'
import Comment from '@/components/comment'
import { CSSTransition } from 'react-transition-group'
import szhRequest from '@/service'
import dayjs from 'dayjs'

export default memo(function ArticleDetail (props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState(null)
  const [likes, setLikes] = useState(0)
  const [comment, setComment] = useState(0)
  const [time, setTime] = useState('')
  const [url, setUrl] = useState('')
  // 动画
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(props.location.pathname === '/index/detail')
  }, [props.location.pathname])
  // 发送网络请求
  useEffect(() => {
    const { id } = props.location.state
    getDetail(id)
  }, [props.location.state])
  const getDetail = (id) => {
    szhRequest.get('/article/detail/' + id).then(res => {
      // console.log(res);
      setContent(res.content)
      setTitle(res.title)
      setLikes(res.thumbs_up)
      setTime(res.updateAt)
      setComment(res.comment)
      setUrl(res.url)
    })
  }
  // 点赞
  const [islikes, setIslikes] = useState(false)
  const thumbsUp = () => {
    const { id } = props.location.state
    szhRequest.post('/article/thumbs-up/' + id).then(res => {
      console.log(res);
      setIslikes(true)
    })
  }
  const { id } = props.location.state
  return (
    <CSSTransition in={animate}
      classNames="box"
      timeout={2000}
      unmountOnExit>
      <DetailWrapper>
        <RollbackOutlined className="back" onClick={() => props.history.goBack()} />
        <div className="img">
          <img src={url} alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="extra szh-flex-center">
          <div><FieldTimeOutlined />{dayjs(time).format('YYYY-MM-DD')}</div>
          <div><CommentOutlined />{comment}条评论</div>
          <div><LikeOutlined />{likes}人点赞</div>
        </div>
        <div className="article">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        {
          islikes ? <div className="thumbs-up">
            <Button type="dashed" danger>
              <LikeOutlined />已点赞
            </Button>
          </div> : <div className="thumbs-up" onClick={thumbsUp}>
            <Button type="dashed" danger>
              <LikeOutlined />点赞
            </Button>
          </div>
        }

        <div>
          <Comment id={id}></Comment>
        </div>
      </DetailWrapper>
    </CSSTransition>
  )
})
