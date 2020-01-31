# react dom api
- findDOMNode
- unmountComponentAtNode
- render

## 获得当前元素的 dom
> ReactDOM.findDOMNode(this)

```js
// 如果在 render 中返回 null，那么 findDOMNode 也返回 null。findDOMNode 只对已经挂载的组件有效
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
 componentDidMount() {
 // this 为当前组件的实例
 const dom = ReactDOM.findDOMNode(this);
 }
 render() {}
} 

```
