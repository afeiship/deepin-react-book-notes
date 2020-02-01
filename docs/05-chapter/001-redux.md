# redux
- Redux 本身非常简单，它的设计思想与 React 有异曲同工之妙，均是希望用最少的 API 实现最核心的功能
- 可预测的状态容器

## what is redux
“Redux”本身指 redux 这个 npm 包，它提供若干 API 让我们使用 reducer 创建 store，并能够
更新 store 中的数据或获取 store 中最新的状态。而“Redux 应用”则是指使用了 redux 这个 npm 包
并结合了视图层实现（如 React）及其他前端应用必备组件（路由库、Ajax 请求库）组成的完整
的类 Flux 思想的前端应用。

- redux 这个 npm 包
- 使用 reducer 创建 store
- 更新 store 中的数据或获取 store 中最新的状态
- Redux 应用 - 则是使用了 redux包，组成的完整的类 Flux 思想的前端应用

## 三大原则
1. 单一数据源
因为在 Redux 的思想里，一个应用永远只有唯一的数据源。我们的第一反应可能是：如果有
一个复杂应用，强制要求唯一的数据源岂不是会产生一个特别庞大的 JavaScript 对象。

至于我们担心的数据源对象过于庞大的问题，可以在 5.6.8 节中看到 Redux 提供的工具函数
combineReducers 是如何化解的

2. 状态是只读的
因为 store 没有 setter 而限制了我们直接修改应用状态的能力，而在 Redux 中，这样的限制被执行得更加彻底，因为我们压根没有 store
Redux 提供的 createStore 方法会根据 reducer 生成 store。最后，我们可以利用 store. dispatch
方法来达到修改状态的目的。

3. 状态修改均由纯函数完成
在 Redux 里，我们通过定义 reducer 来确定状态的修改，而每一个 reducer 都是纯函数，这意
味着它没有副作用，即接受一定的输入，必定会得到一定的输出。

让跟踪每一次因为触发 action 而改变状态的结果成为了可能

## MVC
我们可以根据需要创建无数个 Model，而 Model 之间可以互相监听、
触发事件甚至循环或嵌套触发事件，这些在 Redux 中都是不允许的。
