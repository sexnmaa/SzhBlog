import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const Article = lazy(() => import('@/components/szh-content/cpns/article'))
const About = lazy(() => import('@/components/szh-content/cpns/about'))
const Change = lazy(() => import('@/components/szh-content/cpns/change'))
const Words = lazy(() => import('@/components/szh-content/cpns/words'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/index"></Redirect>
  },
  {
    path: '/index', 
    components: Index,
    routes: [
      {
        path: '/index',
        render: () => <Redirect to="/index/article"></Redirect>
      },
      {
        path: '/index/article',
        component: Article
      },
      {
        path: '/index/about',
        component: About
      },
      {
        path: '/index/change',
        component: Change
      },
      {
        path: '/index/words',
        component: Words
      }
    ]
  }
]

export default routes