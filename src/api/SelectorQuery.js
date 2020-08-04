import NodesRef from "./NodesRef";
export default class SelectorQuery {
  constructor(aliapySelectQuery) {
    this.aliapySelectQuery = aliapySelectQuery;
  }
  in() {
    return this;
  }
  select(selector) {
    const alipayNodeRef = this.aliapySelectQuery.select(selector);
    return new NodesRef(alipayNodeRef);
  }
  selectAll(selector) {
    return new NodesRef(this.aliapySelectQuery);
  }
  selectViewport() {
    return new NodesRef(this.aliapySelectQuery);
  }
  exec(callback) {
    return new NodesRef(this.aliapySelectQuery);
  }
}