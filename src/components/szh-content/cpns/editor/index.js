import React, { useEffect, useState } from 'react'
import { Form, Button, Input, message } from 'antd'
import E from 'wangeditor'
import { EditorWrapper } from './style'
import szhRequest from '@/service'
import Picture from './picture'
import emitter from '@/utils/event'
import { CSSTransition } from 'react-transition-group'

const IndexPage = (props) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(props.location.pathname === '/index/editor')
  }, [props.location.pathname])
  const [form] = Form.useForm()
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [url, setUrl] = useState('')
  const [isAppear, setIsAppear] = useState(false)

  useEffect(() => {
    const text = document.getElementById('text');
    const editor = new E(text)
    // 使用 onchange 函数监听内容的变化
    // console.log(editor, editor.config)
    editor.config.onchange = (html) => {
      // console.log(editor.txt.html())
      setSubtitle(editor.txt.text().substr(0, 60).replace(/&nbsp;/g, '')) //这个只能展示文字，不能展示图片

      // 将富文本内容设置给表单值
      form.setFieldsValue({
        content: html
      })
    }
    editor.config.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ]
    editor.config.uploadImgShowBase64 = true
    editor.create()
  }, [form])

  useEffect(() => {
    const token = localStorage.getItem('szh-token')
    if (token) {
      setIsAppear(true)
    }
    emitter.on('change', () => {
      setIsAppear(true)
    })
  }, [])

  const onFinish = (values) => {
    // console.log('---', values);
    // 提交表单的时候将表单值保存起来
    setContent(values.content)
  };
  const btnClick = () => {
    // console.log(title);
    // console.log(content);
    szhRequest.post('/article/add', {
      title,
      subtitle,
      content,
      url
    }).then(res => {
      message.success('文章发布成功')
      setContent('')
      setTitle('')
    })
  }
  const uploadPic = (data) => {
    // console.log(data.url);
    if (data) {
      setUrl(data.url)
    }
  }

  return (
    <CSSTransition in={animate}
      classNames="box"
      timeout={2000}>
      <EditorWrapper>
        <Form
          className={isAppear ? 'block' : 'none'}
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 23 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="title szh-flex-between">
            <div className="prompt">文章标题：</div><Input className="ipt" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <Form.Item
            name="content"
          >
            <div id="text"></div>
          </Form.Item>
          <div>
            <Picture uploadPic={uploadPic}></Picture>
          </div>
          <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
            <Button type="primary" htmlType="submit" className="btn">
              预览
            </Button>
            <Button type="primary" onClick={btnClick}>
              发布
            </Button>
          </Form.Item>
          {/* 解析富文本html */}
          <div className="prompt-con">内容预览：</div>
          <div className="view-content">
            <span dangerouslySetInnerHTML={{ __html: content }}></span>
          </div>
        </Form>
        <div className={isAppear ? 'none' : 'block'}> 请先登录</div >
      </EditorWrapper >
    </CSSTransition>
  )
}
export default IndexPage
