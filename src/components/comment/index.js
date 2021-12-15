import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { CommentWrapper } from './style'
import moment from 'moment'
import szhRequest from '@/service'

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length}条评论`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value, iptValue, iptChange }) => (
  <>
    <Form.Item>
      <div className="szh-flex-center nickname">
        <div className="nickname-left">昵称 :</div>
        <Input className="nickname-right" onChange={iptChange} value={iptValue} />
      </div>
      <TextArea rows={4} onChange={onChange} value={value} showCount maxLength={100} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        发表评论
      </Button>
    </Form.Item>
  </>
);

export default class App extends React.Component {
  constructor(props) {
    super()
  }
  state = {
    comments: [],
    submitting: false,
    value: '',
    iptValue: ''
  };
  componentDidMount () {
    const { id } = this.props
    szhRequest.get('/comment/list/' + id).then(res => {
      console.log(res);
      if (res.length) {
        // res.forEach(item => {
        //   console.log(this.state.comments);
        //   this.setState({
        //     comments: [...this.state.comments, {
        //       author: item.nickname,
        //       avatar: 'https://joeschmoe.io/api/v1/random',
        //       content: <p>{item.content}</p>,
        //       datetime: moment(item.createAt).format("YYYY-MM-DD HH:mm:ss")
        //     }]
        //   })
        // })
        let list = []
        res.forEach(item => {
          list.push({
            author: item.nickname,
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{item.content}</p>,
            datetime: moment(item.createAt).format("YYYY-MM-DD HH:mm:ss")
          })
        })
        this.setState({
          comments: list
        })
      }
    })
  }

  handleSubmit = () => {
    if (!this.state.value || !this.state.iptValue) {
      return;
    }

    this.setState({
      submitting: true,
    });
    const { id } = this.props
    szhRequest.post('/article/addcomment', {
      nickname: this.state.iptValue,
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: this.state.value,
      article_id: id
    }).then(res => {
      // console.log(res);
    })

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        iptValue: '',
        comments: [
          {
            author: this.state.iptValue,
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{this.state.value}</p>,
            datetime: moment().format("YYYY-MM-DD HH:mm:ss")
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleIpt = e => {
    this.setState({
      iptValue: e.target.value,
    });
  };

  render () {
    const { comments, submitting, value, iptValue } = this.state;

    return (
      <CommentWrapper>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              iptChange={this.handleIpt}
              submitting={submitting}
              value={value}
              iptValue={iptValue}
            />
          }
        />
      </CommentWrapper>
    );
  }
}
