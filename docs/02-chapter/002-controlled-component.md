# controlled compoent
> 受控组件。

## 什么是受控
每当表单的状态发生变化时，都会被写入到组件的 state 中，这种组件在
React 中被称为受控组件（controlled component）。在受控组件中，组件渲染出的状态与它的 value
或 checked prop 相对应

- React 官方同样推荐使用受控表单组件

## why onchange
为何每一个 <input> 或 <select> 都要绑定一个 change 事件呢？


## 总结下 React 受控组件更新 state 的流程
- (1) 可以通过在初始 state 中设置表单的默认值。
- (2) 每当表单的值发生变化时，调用 onChange 事件处理器。
- (3) 事件处理器通过合成事件对象 e 拿到改变后的状态，并更新应用的 state。
- (4) setState 触发视图的重新渲染，完成表单组件值的更新。
