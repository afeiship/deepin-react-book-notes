# decorator
decorator 是在 ES7 中定义的新特性，与 Java 中的 pre-defined annotation（预定义注解）相似。
但与 Java 的 annotation 不同的是，decorator 是运用在运行时的方法。在 Redux 或其他一些应用层
框架中，越来越多地使用 decorator 以实现对组件的“修饰”。现在，我们使用 decorator 来实现
mixin。

## core-decorators
core-decorators 库为开发者提供了一些实用的 decorator，其中实现了我们正想要的 @mixin。
下面解读一下其核心实现：


## 实现的区别
mixin 与 createClass 中的 mixin 的区别。上述实现中，mixin
的逻辑和最早实现的简单逻辑很相似，之前直接给对象的 prototype 属性赋值，但这里用了
getOwnPropertyDescriptor 和 defineProperty 这两个方法，有什么区别呢？


## mixin 的问题
- 破坏了原有组件的封装
  ~~~
  我们知道 mixin 方法会混入方法，给原有组件带来新的特性，比如 mixin 中有一个 renderList
  方法，给我们带来了渲染 List 的能力，但它也可能带来了新的 state 和 props，这意味着组件有一
  些“不可见”的状态需要我们去维护，但我们在使用的时候并不清楚。此外，renderList 中的方
  法会有调用组件中的方法，但很可能被其他 mixin 截获，带来很多不可知
  ~~~
- 命名冲突
  ~~~
  刚才也提到了，mixin 是平面结构，那么不同 mixin 中的命名在不可知的情况，重用的情况
  是不可控的。尤其是像 handleChange 这样常见的名字，我们不能在两个 mixin 中同时使用，也不
  能在自己的组件中使用这个名字的方法。
  尽管我们可以通过更改名字来解决，但遇到第三方引用，或已经引用了几个 mixin 的情况下，
  总是要花一定的成本去解决冲突。
  ~~~
- 增加复杂性
  ~~~
  在过去写 mixin 的时候，是不是常遇到这样的情形：我们设计一个组件，引入名为 PopupMixin
  的 mixin，这样就给组件引进了 PopupMixin 生命周期方法，还有 hidePopup()、startPopup() 等
  方法。当我们再引入HoverMixin时，将有更多的方法被引进，比如 handleMouseEnter()、handleMouseLeave()、isHovering()方法。当然，我们可以进一步抽象出 TooltipMixin，将两个整合在
  一起，但我们发现它们都有 componentDidUpdate 方法。
  几个月后，再去看组件的实现时，会发现代码已经没法维护，它的逻辑已经复杂到难以理解。
  写 React 组件时，我们首先考虑的往往是单一的功能、简洁的设计和逻辑。当加入功能的时候，
  可以继续控制组件的输入和输出。如果说因为复杂性，我们不断加入新的状态，那么组件肯定会
  因此变得非常难以维护。
  针对这些困扰，React 社区提出了新的方式来取代 mixin，那就是高阶组件
  ~~~

## resources
- https://github.com/afeiship/next-js-core2/blob/v1.1.0/src/oop.js
