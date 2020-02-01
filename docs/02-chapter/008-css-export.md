# css export 
> 上面提到的 :export 关键字可以把 CSS 中的变量输出到 JavaScript 中，例如：

```scss
/* config.scss */
$primary-color: #f40;
:export {
 primaryColor: $primary-color;
}
/* app.js */
import style from 'config.scss';

// 会输出 #F40
console.log(style.primaryColor); 
```
