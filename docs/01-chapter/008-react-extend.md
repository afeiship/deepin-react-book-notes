# react extend

在实际应用 React
的过程中，我们极少让子类去继承功能组件。试想在 UI 层面小的修改就会影响到整体交互或样
式，牵一发而动全身，用继承来抽象往往是事倍功半


## 组合优于继承
在 React 组件开发中，常用的方式是将组
件拆分到合理的粒度，用组合的方式合成业务组件，也就是 HAS-A 的关系。但在高阶组件构建
中，我们可以用反向继承的方法来实现，