function shallowEqual(obj, newObj) {
  if (obj === newObj) {
    return true;
  }
  const objKeys = Object.keys(obj);
  const newObjKeys = Object.keys(newObj);
  if (objKeys.length !== newObjKeys.length) {
    return false;
  }
  // 关键代码，只需关注 props 中每一个是否相等，无需深入判断
  return objKeys.every((key) => {
    return newObj[key] === obj[key];
  });
}
