import React, { memo, useState, useEffect } from 'react'
import { WordsWrapper } from './style'
import BulletScreen, { StyledBullet } from 'rc-bullets'
import { useInterval } from '@//utils/useInterval'
import headUrl from '@/assets/img/avatar.png'
import { Input, Button } from 'antd';
import { CSSTransition } from 'react-transition-group'
import szhRequest from '@/service'
const { TextArea } = Input;



export default memo(function Article (props) {
  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
  const [arr, setArr] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)
  let i = 0
  useInterval(() => {
    if (i > arr.length - 1) return
    screen.push(
      <StyledBullet
        head={headUrl}
        msg={arr[i].content}
        backgroundColor={'#fff'}
        size='large'
      />
    )
    i++
  }, 2000)
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(props.location.pathname === '/index/words')
  }, [props.location.pathname])
  useEffect(() => {
    getList()
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    let s = new BulletScreen('.screen', { duration: 50 });
    // or
    // let s=new BulletScreen(document.querySelector('.screen));
    setScreen(s);
  }, [])
  // 获得弹幕列表
  function getList () {
    szhRequest.get('/barrage/list').then(res => {
      if (res.length) {
        let list = []
        res.forEach(item => {
          list.push({
            content: item.content
          })
        })
        setArr(list)
        // res.forEach(item => {
        //   setArr([...arr, {
        //     content: item.content
        //   }])
        //   console.log(item);
        //   console.log(arr);
        // })
      }
    })
  }
  // 弹幕内容输入事件处理
  const handleChange = ({ target: { value } }) => {
    setBullet(value);
  };
  // 发送弹幕
  const handleSend = () => {
    if (bullet) {
      // push 纯文本
      // screen.push(bullet);
      // or 使用 StyledBullet
      szhRequest.post('/barrage/add', {
        content: bullet
      })

      screen.push(
        <StyledBullet
          head={headUrl}
          msg={bullet}
          backgroundColor={'#fff'}
          size='large'
        />
      )
      setBullet('')
      setIsDisabled(true)
      setTimeout(() => {
        setIsDisabled(false)
      }, 2000)
      // or 还可以这样使用，效果等同使用 StyledBullet 组件
      // screen.push({ msg: bullet, head: headUrl, color: "#eee" size="large" backgroundColor: "rgba(2,2,2,.3)" })
    }
  }
  return (
    <WordsWrapper>
      <div className="message">{arr.length}条留言装填完毕，准备发射~</div>
      <div className="screen" style={{ width: '60vw', height: '680px' }}></div>
      <CSSTransition in={animate}
        classNames="box"
        timeout={2000}
        unmountOnExit>
        <div className="ipt">
          <TextArea showCount value={bullet} maxLength={100} onChange={handleChange} placeholder="请给我留言吧" />
          <div className="btn">
            <Button onClick={handleSend} type="primary" disabled={isDisabled}>发射弹幕</Button>
          </div>
        </div>
      </CSSTransition>
    </WordsWrapper>
  )
})