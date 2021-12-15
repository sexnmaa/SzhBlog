import React, { memo } from 'react'
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PictureWrapper } from './style'

export default memo(function Picture (props) {
  const { uploadPic } = props
  const upload = (file) => {
    uploadPic(file.file.response)
  }
  return (
    <PictureWrapper>
      <Upload
        action="http://123.57.255.87:8000/upload"
        listType="picture"
        maxCount={1}
        // data={{ id: total }}
        // beforeUpload={beforeUpload}
        onChange={upload}
      >
        <Button icon={<UploadOutlined />}>上传配图</Button>
      </Upload>
    </PictureWrapper>
  )
})
