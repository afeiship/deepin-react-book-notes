# pure render

PureRender 是 React 组件开发中一个重要的概念。上一节我们详解了纯函数，PureRender 中
的 Pure 指的就是`组件满足纯函数的条件，即组件的渲染是被相同的 props 和 state 渲染进而得到
相同的结果`。这个概念与上述给定相同的输入，它总是返回相同的输出一致。




```js
function shallowEqual(obj, newObj) {
  if (obj === newObj) {
    return true;
  }
  const objKeys = Object.keys(obj);
  const newObjKeys = Object.keys(newObj);
  if (objKeys.length !== newObjKeys.length) {
    return false;
  }
  // 关键代码，只需关注 props 中每一个是否相等，无需深入判断
  return objKeys.every((key) => {
    return newObj[key] === obj[key];
  });
}
```
