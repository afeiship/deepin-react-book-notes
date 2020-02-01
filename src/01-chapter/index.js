// MyReducer.js
const initialState = {
  todos: []
};
// 我们定义的 todos 这个 reducer 在第一次执行的时候，会返回 { todos: [] } 作为初始化状态
function todos(previousState = initialState, action) {
  switch (action.type) {
    case 'XXX': {
      // 具体的业务逻辑
    }
    default:
      return previousState;
  }
}
