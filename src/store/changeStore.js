import { makeAutoObservable } from 'mobx'

class ChangeStore {
  constructor() {
    makeAutoObservable(this)
  }
  src = ''
  changeSrc = (src) => {
    this.src = src
  }
}

const changeStore = new ChangeStore()
export default changeStore