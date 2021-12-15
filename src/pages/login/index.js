import React, { useState} from 'react'
import { LoginWrapper } from './style'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd';
import { inject, observer } from 'mobx-react';
import emmitter from '../../utils/event'

function Login (props) {
  const close = () => {
    props.close()
  }
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  // 记住密码
  const [check, setCheck] = useState(true)
  const rememberPwd = (e) => {
    setCheck(!e.target.checked)
    console.log(check);
  }

  // 登录
  const loginHandler = async () => {
    // 获取用户信息
    const userInfo = await props.loginStore.getUserInfo(name, password)
    console.log(userInfo);
    if (userInfo) {
      props.close()
      emmitter.emit('change')
    }
  }
  return (
    <LoginWrapper>
      <div className="szh-flex-between">
        <h2 className="title">登录</h2>
        <CloseCircleOutlined className="icon" onClick={close} />
      </div>
      <div className="inputBox">
        <input placeholder="账号" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="inputBox">
        <input type="password" placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="inputBox">
        <Checkbox onChange={rememberPwd}>记住密码</Checkbox>
        <input type="submit" value="登录" onClick={loginHandler} />
      </div>
    </LoginWrapper>
  )
}
export default inject('loginStore')(observer(Login))