# mixin

在不同的 mixin 里实现两个名字一样的普通方法，按理说，后面的方法应该会覆盖前面的方
法。那么，在 React 中是否一样会覆盖呢？事实上，它并不会覆盖，而是在控制台里报了一个在
`ReactClassInterface` 里的错误，指出你尝试在组件中多次定义一个方法，这会造成冲突。因此，
在 React 中是不允许出现重名普通方法的 mixin。

- 有必要加一个实现逻辑，在mixin同名的报错处理。


## react-mixin 为组件做了两件事
- 工具方法。这是 mixin 的基本功能，如果你想共享一些工具类方法，就可以定义它们，直
接在各个组件中使用。
- 生命周期继承，props 与 state 合并。这是 mixin 特别重要的功能，它能够合并生命周期方
法。如果有很多 mixin 来定义 componentDidMount 这个周期，那么 React 会非常智能地将
它们都合并起来执行。同样，mixin 也可以作用在 getInitialState 的结果上，作 state 的
合并，而 props 也是这样合并的。

