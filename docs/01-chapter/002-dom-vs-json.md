# dom vs json

```html
<button class="btn btn-blue">
 <em>Confirm</em>
</button> 
```

```js
{
  type: 'button',
  props: {
    className: 'btn btn-blue',
    children: [
      {
        type: 'em',
        props: {
          children: 'Confirm'
        }
      }
    ]
  }
} 
```


## 组件元素
```js
const Button = ({ color, text }) => {
  return {
    type: 'button',
    props: {
      className: `btn btn-${color}`,
      children: {
        type: 'em',
        props: {
          children: text
        }
      }
    }
  };
};
```

## 创建组件
```js
Button({color:'blue', text:'Confirm'});
```


## 继续封装
```js
const DangerButton = ({ text }) => ({
  type: Button,
  props: {
    color: 'red',
    children: text
  }
});
```

## 实际业务
```js
const DeleteAccount = () => ({
  type: 'div',
  props: {
    children: [
      {
        type: 'p',
        props: {
          children: 'Are you sure?'
        }
      },
      {
        type: DangerButton,
        props: {
          children: 'Confirm'
        }
      },
      {
        type: Button,
        props: {
          color: 'blue',
          children: 'Cancel'
        }
      }
    ]
  }
});
```

## 问题 - 复杂的业务会view很复杂
- 这让我们想起使用 HTML 书写结构时的畅快感受，JSX 语法为此应运而生

```js
const DeleteAccount = () => (
  <div>
    <p>Are you sure?</p>
    <DangerButton>Confirm</DangerButton>
    <Button color="blue">Cancel</Button>
  </div>
);
```

