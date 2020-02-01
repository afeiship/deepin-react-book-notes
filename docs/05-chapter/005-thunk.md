# thunk
其实在学习 Node.js
时，已经接触并熟悉 Thunk 函数了

```js
fs.readFile(fileName, callback);
var readFileThunk = Thunk(fileName);
readFileThunk(callback);


var Thunk = function(fileName) {
  return function(callback) {
    return fs.readFile(fileName, callback);
  };
};
```

## thunk的定义
Thunk 函数实现上就是针对多参数的 currying 以实现对函数的惰性求值。任何函数，只要参
数有回调函数，就能写成 Thunk 函数的形式


## redux-thunk
```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
}
```
