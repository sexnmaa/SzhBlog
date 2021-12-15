import {
  // HomeOutlined,
  ContainerOutlined,
  MessageOutlined,
  SmileOutlined,
  SkinOutlined,
  EditOutlined
} from '@ant-design/icons';

export const menu = [
  // {
  //   title: '首页',
  //   link: '/index',
  //   icon: <HomeOutlined/>
  // },
  {
    title: '文章',
    link: '/index/article',
    icon: <ContainerOutlined/>
  },
  {
    title: '弹幕留言墙',
    link: '/index/words',
    icon: <MessageOutlined/>
  },
  {
    title: '个人介绍',
    link: '/index/about',
    icon: <SmileOutlined />
  },
  {
    title: '背景更换',
    link: '/index/change',
    icon: <SkinOutlined />
  },
  {
    title: '编辑文章',
    link: '/index/editor',
    icon: <EditOutlined />
  }
]

