import React, { memo, useEffect, useState } from 'react'
import { HeaderWrapper } from './style'
import {
  HomeOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Input } from 'antd';
import { NavLink } from 'react-router-dom'
import emitter from '@/utils/event'

const { Search } = Input;

export default memo(function Login (props) {
  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(localStorage.getItem('szh-token'))
  }, [token])
  useEffect(() => {
    emitter.on('change', () => {
      setToken(true)
    })
  })
  const onSearch = () => {
    console.log(111)
  }
  // 点击登录按钮
  const handleLogin = () => {
    props.login()
  }
  return (
    <HeaderWrapper>
      <div className="wrap-v1 szh-flex-between content">
        <NavLink to="/index" className="index">
          <HomeOutlined /> 首页
        </NavLink>
        <div className="search">
          <Search
            placeholder="请输入想搜索的内容"
            allowClear
            enterButton={<SearchOutlined className="search-icon" />}
            onSearch={onSearch}
          />
        </div>
        {
          token ? <div className="login">已登录</div> : <div className="login" onClick={handleLogin}>登录</div>   
        }
      </div>
    </HeaderWrapper>
  )
})
