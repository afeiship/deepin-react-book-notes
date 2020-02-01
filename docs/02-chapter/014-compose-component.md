# compose component


## 不同的 hoc 通过 compose 来组合实现成最终的组件
```js
const FinalSelector = compose(
  asyncSelectDecorator,
  searchDecorator,
  selectedItemDecorator
)(Selector);

class SearchSelect extends Component {
  render() {
    return (
      <FinalSelector {...this.props}>
        <SelectInput />
        <SearchInput />
        <List />
      </FinalSelector>
    );
  }
}
```
