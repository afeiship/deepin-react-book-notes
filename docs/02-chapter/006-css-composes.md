# css composes
> 对于样式复用，CSS Modules 只提供了唯一的方式来处理——composes 组合。示例代码如下

## css comose
```jsx
/* components/Button.css */
.base { /* 所有通用的样式 */ }
.normal {
 composes: base;
 /* normal 其他样式 */
}
.disabled {
 composes: base;
 /* disabled 其他样式 */
}

import styles from './Button.css';
buttonElem.outerHTML = `<button class=${styles.normal}>Submit</button>` 
```

## 生成的 HTML 变为：
<button class="button--base-abc53 button--normal-abc53"> Processing... </button> 
