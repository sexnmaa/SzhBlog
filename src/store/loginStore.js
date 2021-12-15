import { makeAutoObservable } from "mobx";
import szhRequest from "@/service";

class LoginStore {
  constructor() {
    makeAutoObservable(this)
  }
  userInfo: {}
  async getUserInfo (name, password) {
    this.userInfo = await szhRequest.post('/login', {
      name,
      password
    })
    console.log(this.userInfo);
    if (this.userInfo) {
      localStorage.setItem('szh-token', this.userInfo.token)
    }
    // 关闭登录框并显示已登录
    return this.userInfo
  }
}

const loginStore = new LoginStore()
export default loginStore