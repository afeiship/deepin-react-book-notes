# jsx namepsace

JSX 还可以通过命名空间的方式使用组件元素，以解决组件相同名称冲突的问题，或是对一
组组件进行归类。比如，我们想使用 Material UI 组件库中的组件，以 MUI 为包名，可以这么写：
```js
const App = () => (
 <MUI.RaisedButton label="Default" />
);
```
在 HTML 标准中，还有一些特殊的标签值得讨论，比如注释和 DOCTYPE 头。
