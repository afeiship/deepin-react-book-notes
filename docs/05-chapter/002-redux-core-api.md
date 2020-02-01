# core api

## createStore
```js
import { createStore } from 'redux';
const store = createStore(reducers); 
```

## store 的关键方法
通过 createStore 方法创建的 store 是一个对象，它本身又包含 4 个方法。
- getState()：获取 store 中当前的状态。
- dispatch(action)：分发一个 action，并返回这个 action，这是唯一能改变 store 中数据的
方式。
- subscribe(listener)：注册一个监听者，它在 store 发生变化时被调用。
- replaceReducer(nextReducer)：更新当前 store 里的 reducer，一般只会在开发模式中调用该方法。
在实际使用中，我们最常用的是 getState() 和 dispatch() 这两个方法。
至于 `subscribe()` 和 `replaceReducer()` 方法，一般会在 Redux 与某个系统（如 React）做桥接的时候使用。

## reducer
- Flux 的核心思想之一就是不直接修改数据，而是分发一个 action 来描述发生的改变。那么，在Redux 里由谁来修改数据呢？
- 在 Redux 里，负责响应 action 并修改数据的角色就是 reducer
- 函数签名为 reducer(previousState, action) => newState

在实际应用中，reducer 在处理 previousState 时，还需要有一个特殊的非空判断。很显然，
reducer 第一次执行的时候，并没有任何的 previousState，而 reducer 的最终职责是返回新的 state，
因此需要在这种特殊情况下返回一个定义好的 initialState

```js
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
```
