# react-css-modules


如果不想频繁地输入 styles.**，可以使用 react-css-modules 库。它通过高阶组件的形式来
避免重复输入 styles.**。我们来重写上述例子：

```js
import React, { Component } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './dialog.css';

class Dialog extends Component {
  render() {
    const cx = classNames({
      confirm: !this.state.disabled,
      disabledConfirm: this.state.disabled
    });
    return (
      <div styleName="root">
        <a styleName={cx}>Confirm</a>
        ...
      </div>
    );
  }
}

export default CSSModules(Dialog, styles);
```


##  CSS Modules 优点
 我们不用再关注是否使用驼峰来命名 class 名；
 我们不用每一次使用 CSS Modules 的时候都关联 style 对象；
 使用 CSS Modules，容易使用 :global 去解决特殊情况，使用 react-css-modules 可写成 <div
className="global-css" styleName="local-module"></div>，这种形式轻松对应全局和局
部；
 当 styleName 关联了一个 undefined CSS Modules 时，我们会得到一个警告；
 我们可以强迫使用单一的 CSS Modules。
