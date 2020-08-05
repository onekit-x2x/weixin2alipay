export default class SelectorQuery {
  constructor(aliapySelectQuery) {
    this.aliapySelectQuery = aliapySelectQuery;
  }
  in() {
    return this;
  }
  select(selector) {
    this.aliapySelectQuery.select(selector);
    return this;
  }
  selectAll(selector) {
    this.aliapySelectQuery.selectAll(selector);
    return this;
  }
  selectViewport() {
    this.aliapySelectQuery.selectViewport();
    return this;
  }
  exec(callback) {
    this.aliapySelectQuery.exec(callback);
    return this;
  }
  //////////////
  fields(callback) {
    this.aliapySelectQuery.fields(callback);
    return this;
  }
  boundingClientRect(callback) {
    this.aliapySelectQuery.boundingClientRect(callback);
    return this;
  }
  context(callback) {
    this.aliapySelectQuery.context(callback);
    return this;
  }
  node(callback) {
    this.aliapySelectQuery.node(callback);
    return this;
  }
  scrollOffset(callback) {
    this.aliapySelectQuery.scrollOffset(callback);
    return this;
  }
}