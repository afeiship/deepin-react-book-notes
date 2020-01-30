# dangerous HTML

## React 提供了 dangerouslySetInnerHTML 属性。
> 正如其名，它的作用就是避免 React 转义字符，在确定必要的情况下可以使用它：

```js
<div dangerouslySetInnerHTML={{__html: 'cc &copy; 2015'}} /> 
```
