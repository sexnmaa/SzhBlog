import { AppWrapper } from './style'
import SZHIndex from '@/pages/index/index.js'
import { BrowserRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'


function App ({changeStore}) {
  const bgImage = changeStore.src 
  return (
    <AppWrapper bgImage={bgImage}>
      <BrowserRouter>
        <SZHIndex></SZHIndex>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default inject('changeStore')(observer(App))
