import React, { memo, useState, useEffect } from 'react'
import ArticleItem from './article-item'
import { ArticleWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { Pagination, ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';


import szhRequest from '@/service'

export default memo(function Article (props) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(props.location.pathname === '/index/article')
  }, [props.location.pathname])
  // 分页查询
  const [list, setList] = useState([])
  const [total, setTotal] = useState(50)
  const [pageSize, setPageSize] = useState(5)
  const [current, setCurrent] = useState(1)
  useEffect(() => {
    loadingCount()
    const pageData = localStorage.getItem('pageData')
    if (pageData) {
      const { page, pageSize } = JSON.parse(pageData)
      loadingLists(page, pageSize)
      setPageSize(pageSize)
      setCurrent(page)
    } else {
      loadingLists()
    }
  }, [])
  const loadingLists = (page = 1, pageSize = 5) => {
    const offset = (page - 1) * pageSize
    szhRequest.get('/article/list', {
      params: {
        offset: offset,
        size: pageSize
      }
    }).then(res => {
      setList(res)
    })
  }
  const loadingCount = () => {
    szhRequest.get('/article/count').then(res => {
      setTotal(res.count)
    })
  }
  const changePage = (page, pageSize) => {
    setPageSize(pageSize)
    setCurrent(page)
    loadingLists(page, pageSize)
    localStorage.setItem('pageData', JSON.stringify({ page, pageSize }))
  }
  return (
    <CSSTransition in={animate}
      classNames="box"
      timeout={2000}
      unmountOnExit>
      <ArticleWrapper>
        {/* <div className="title">文章</div> */}
        <div>
          {
            list.map((item, index) => {
              return (
                <ArticleItem info={item} key={item.id}></ArticleItem>
              )
            })
          }
        </div>

        <ConfigProvider locale={zh_CN}>
          <Pagination
            total={total}
            current={current}
            pageSize={pageSize}
            defaultCurrent={current}
            defaultPageSize={pageSize}
            showSizeChanger
            showQuickJumper
            showTotal={total => `共 ${total} 条`}
            pageSizeOptions={[5, 10, 15, 20]}
            onChange={(page, pageSize) => changePage(page, pageSize)}
          />
        </ConfigProvider>
      </ArticleWrapper>
    </CSSTransition>
  )
})