# event

## SyntheticEvent
- React 基于 Virtual DOM 实现了一个 SyntheticEvent （合成事件）层，我们所定义的事件
处理器会接收到一个 SyntheticEvent 对象的实例，它完全符合 W3C 标准，不会存在任何 IE 标
准的兼容性问题。
- 所有事件都自动绑定到最外层上。如果需要访问原生事件对象，可以使用 `nativeEvent` 属性

## 绑定事件
```js
<button onClick={this.handleClick}>Test</button> 
```

## 实现机制
主要对合成事件做了两件事：
- 事件委派
- 自动绑定

## 绑定 this (双冒号语法)
```js
class App extends Component {
  handleClick(e) {
    console.log(e);
  }
  render() {
    // 双冒号语法
    return <button onClick={::this.handleClick}>Test</button>;
    // return <button onClick={this.handleClick.bind(this)}>Test</button>;
  }
}
```

## 构造器内声明
```js
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e);
  }
  render() {
    return <button onClick={this.handleClick}>Test</button>;
  }
}
```

## 使用原生事件
- 注意需要自己卸载，否则可能内存泄漏
- 对于 SyntheticEvent的实现：有些事件 React 并没有实现，或者受某些
限制没办法去实现，比如 window 的 resize 事件
