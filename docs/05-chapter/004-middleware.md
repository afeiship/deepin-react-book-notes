# middleware

## vs flux
在 Redux 中，这种异步 action 的需求可以通过 Redux 原生的 middleware 设计来实现

## why predicate
简单地说，在摒弃了传统 MVC 的发布/订阅模式并通过 Redux 三大原则强化对状态
的修改后，使用 Redux 可以让你的应用状态管理变得可预测、可追溯

## action - pipe
你可以检阅每一个流过的 action，挑选出特定类型的 action 进行相应操作，给你
一次改变 action 的机会

## view + redux
<img width="800" src="https://tva1.sinaimg.cn/large/006tNbRwgy1gbh8cflf5ij30xm054js5.jpg">

```js
// Redux 提供了 applyMiddleware 方法来加载 middleware，该方法的源码如下：
import compose from './compose';
export default function applyMiddleware(...middlewares) {
  return (next) => (reducer, initialState) => {
    let store = next(reducer, initialState);
    let dispatch = store.dispatch;
    let chain = [];
    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    };
    chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

// applyMiddleware 的代码虽然只有二十多行，却非常精炼。
```

## logger middleware
```js
export default (store) => (next) => (action) => {
  console.log('dispatch:', action);
  next(action);
  console.log('finish:', action);
};
```

## 函数式编程思想设计
