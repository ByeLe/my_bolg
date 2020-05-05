module.exports = {
  state: {
    parentType: '', // 父类型  JS  HTML等
    selectId: 0 // 选择子类的ID
  },
  mutations: {
    changeSelectScheme(state, data) {
      console.log('紧挨改变')
      state.parentType = data.parentType
      state.selectId = data.selectId
    }
  },
  actions: {
  }
}
