# customize attributes

- 如果在 JSX 中往 DOM 元素中传入自定义属性，React 是不会渲染的：
<div d="xxx">content</div>

- 如果要使用 HTML 自定义属性，要使用 data- 前缀，这与 HTML 标准也是一致的：
<div data-attr="xxx">content</div>

- 然而，在自定义标签中任意的属性都是被支持的：
<x-my-component custom-attr="foo" />

- 以 aria- 开头的网络无障碍属性同样可以正常使用：
<div aria-hidden={true}></div> 
