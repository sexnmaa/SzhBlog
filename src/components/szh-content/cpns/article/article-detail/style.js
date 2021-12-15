import styled from 'styled-components'

export const DetailWrapper = styled.div`
min-height: 800px;
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #eee;
.back {
  font-size: 30px;
  color: palevioletred;
  margin-bottom: 20px;
  margin-left: -620px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
}
  .img {
    width: 640px;
    height: 250px;
    overflow: hidden;
    img {
      width: 100%;
      margin-top: -80px;
    }
  }
  .title {
    margin-top: 10px;
    font-size: 30px;
    font-weight: 600;
  }
  .extra {
    color: #555;
    div {
      margin: 10px;
    }
  }
  .article {
    width: 640px;
  }
  .thumbs-up {
    margin-top: 30px;
  }
  /* 表格 */
  table {
      border-collapse: collapse;
  }
  table th,
  table td {
      border: 1px solid #ccc;
      min-width: 50px;
      height: 20px;
      text-align: left;
  }
  table th {
      background-color: #f1f1f1;
      text-align: center
  }

  /* 代码块 */
  pre>code {
      display: block;
      border: 1px solid hsl(0, 0%, 91%);
      border-radius: 4px 4px;
      text-indent: 0;
      background-color: #fafafa;
      padding: 10px;
      font-size: 14px;
  }

  /* 引用 */
  blockquote {
      display: block;
      border-left: 8px solid #d0e5f2;
      padding: 10px 10px;
      margin: 10px 0;
      background-color: #f1f1f1;
  }

  /* 列表 */
  ul, ol {
    margin: 10px 0 10px 20px;
  }

  /* 分割线 */
  hr {
      display: block;
      width: 90%;
      margin: 20px auto;
      border: 0;
      height: 1px;
      background-color: #ccc;
  }
`