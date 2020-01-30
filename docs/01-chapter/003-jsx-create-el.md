# jsx and createElement

## jsx/createElement 
```js
var DeleteAccount = function DeleteAccount() {
  return React.createElement(
    'div',
    null,
    React.createElement('p', null, 'Are you sure?'),
    React.createElement(DangerButton, null, 'Confirm'),
    React.createElement(Button, { color: 'blue' }, 'Cancel')
  );
};
```


## resources
- https://babeljs.io/docs/en/babel-preset-react#docsNav
