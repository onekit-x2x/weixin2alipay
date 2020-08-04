import NodesRef from "./NodesRef";
export default class SelectorQuery {
  constructor(aliapySelectQuery) {
    this.aliapySelectQuery = aliapySelectQuery;
  }
  in() {
    return new NodesRef(this.aliapySelectQuery);
  }
  exec() {
    return new NodesRef(this.aliapySelectQuery);
  }
  select(selector) {
    return new NodesRef(this.aliapySelectQuery);
  }
  selectAll() {
    return new NodesRef(this.aliapySelectQuery);
  }
  selectViewport() {
    return new NodesRef(this.aliapySelectQuery);
  }
}