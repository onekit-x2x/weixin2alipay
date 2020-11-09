/* eslint-disable no-console */
/* eslint-disable camelcase */
export default class NodesRef {
  constructor(weixinSelectQuery, cmd, selector) {
    this._selectQuery = weixinSelectQuery
    this.cmd = cmd
    this.selector = selector
  }

  boundingClientRect(callback) {
    this.callback = callback
    this._selectQuery.tasks.push({type: 'boundingClientRect', nodeRef: this})
    return this._selectQuery
  }

  context(callback) {
    this.callback = callback
    this._selectQuery.tasks.push({type: 'context', nodeRef: this})
    return this._selectQuery
  }

  fields(fields, callback) {
    this.fields = fields
    this.callback = callback
    this._selectQuery.tasks.push({type: 'fields', nodeRef: this})
    return this._selectQuery
  }

  node(callback) {
    this.callback = callback
    this._selectQuery.tasks.push({type: 'node', nodeRef: this})
    return this._selectQuery
  }

  scrollOffset(callback) {
    this.callback = callback
    this._selectQuery.tasks.push({type: 'scrollOffset', nodeRef: this})
    return this._selectQuery
  }
}
