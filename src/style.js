import styled from 'styled-components'
import defaultImage from '@/assets/img/bg_2.webp'
// props => props.bgImage

export const AppWrapper = styled.div`
  background: url(${props => props.bgImage || defaultImage}) no-repeat;
  width: 100%;
	height: 100%;
  background-attachment:fixed;
	background-size: cover;
`