# form props


## React 的 form 组件提供了几个重要的属性，用于展示组件的状态
- value：类型为 text 的 input 组件、textarea 组件以及 select 组件都借助 value prop 来展示
应用的状态。
- checked：类型为 radio 或 checkbox 的组件借助值为 boolean 类型的 selected prop 来展示
应用的状态。
- selected：该属性可作用于 select 组件下面的 option 上，React 并不建议使用这种方式表
示状态，而推荐在 select 组件上使用 value 的方式。
