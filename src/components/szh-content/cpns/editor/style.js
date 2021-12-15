import styled from 'styled-components'

export const EditorWrapper = styled.div`
  width: 690px;

  .title {
    margin-top: 50px;
    margin-bottom: 40px;
    .prompt {
      width: 100px;
      font-size: 18px;
    }
    .ipt {
      width: 500px;
      margin-right: 100px;
    }
  }
  .prompt-con {
    margin-bottom: 15px;
  }
  .view-content {
    width: 660px;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .btn {
    margin-right: 40px;
  }
  .w-e-button-container {
    width: 65px;
    height: 40px;
    .right {
      width: 65px;
      min-height: 40px;
      &::after {
        display: none;
      }
    }
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
  .block {
    display: block;
  }
  .none {
    display: none;
  }
`