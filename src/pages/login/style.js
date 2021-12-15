import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 300px;
  padding: 0 20px;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -80%); */
  margin-left: -150px;
  margin-top: -180px;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.4);
  z-index: 999;
  
  .title {
    position: relative;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 5px;
    width: 150px;
    cursor: pointer;
  }
  .icon {
    font-size: 30px;
    cursor: pointer;
  }
  .title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0px;
    height: 3px;
    background: #fff;
    transition: 0.5s;
  }
  h2:hover:before {
    width: 53px;
  }
  .inputBox {
    width: 100%;
    margin-top: 20px;
    input {
    width: 100%;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    border: none;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    letter-spacing: 1px;
    color: #333;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
  }
  .inputBox input::placeholder {
    color: #1890FF;
  }
  .inputBox input[type="submit"] {
    background: #fff;
    color: #666;
    max-width: 100px;
    margin-bottom: 20px;
    font-weight: 600;
    cursor: pointer;
  }
`