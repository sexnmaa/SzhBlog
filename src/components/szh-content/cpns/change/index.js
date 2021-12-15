import React, { useState, useEffect } from 'react'
import { ChangeWrapper } from './style'
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { CSSTransition } from 'react-transition-group'
import { inject, observer } from 'mobx-react'
import szhRequest from '@/service'

// export default memo(function About (props)+
// export default inject('changeStore')(observer(memo(function About (props)))

const About = (props) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(props.location.pathname === '/index/change')
  }, [props.location.pathname])
  const selectPic = (item) => {
    props.changeStore.changeSrc(item.url)
  }
  const [pics, setPics] = useState([])
  useEffect(() => {
    getPics()
  }, [])
  const getPics = () => {
    szhRequest.get('/get-pics').then(res => {
      setPics(res)
    })
  }
  const getFile = (file) => {
    getPics()
  }
  return (
    <CSSTransition in={animate}
      classNames="box"
      timeout={2000}
      unmountOnExit>
      <ChangeWrapper>
        {
          pics.map((item, index) => {
            return (
              <div className="item" key={item.id} onClick={() => selectPic(item)}>
                <img src={item.url} alt="" />
              </div>
            )
          })
        }
        <Upload
          action="http://123.57.255.87:8000/uploadBg"
          listType="picture"
          maxCount={1}
          onChange={getFile}
        >
          <Button icon={<UploadOutlined />}>上传背景</Button>
        </Upload>
      </ChangeWrapper>
    </CSSTransition>
  )
}
export default inject('changeStore')(observer(About));