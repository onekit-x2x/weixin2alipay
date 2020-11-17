/* eslint-disable camelcase */
import NodesRef from './NodesRef'
import VideoContext from './VideoContext'

export default class SelectorQuery {
  constructor() {
    this.tasks = []
  }

  in() {
    return this
  }

  select(selector) {
    return new NodesRef(this, 'select', selector)
  }

  selectAll() {
    return new NodesRef(this, 'selectAll')
  }

  selectViewport() {
    return new NodesRef(this, 'selectViewport')
  }

  exec(callback) {
    const that = this
    const results = []
    let i = 0
    function done(nodeRef, res) {
      nodeRef.callback(res)
      results.push(res)
      if (results.length < that.tasks.length) {
        i++
        // eslint-disable-next-line no-use-before-define
        next()
        return
      }
      callback(results)
    }
    function next() {
      const task = that.tasks[i]
      const aliapySelectQuery = my.createSelectorQuery()
      const nodeRef = task.nodeRef
      let alipayNodeRef
      switch (nodeRef.cmd) {
        case 'select':
          alipayNodeRef = aliapySelectQuery.select(nodeRef.selector)
          break
        case 'selectAll':
          alipayNodeRef = aliapySelectQuery.selectAll()
          break
        case 'selectViewport':
          alipayNodeRef = aliapySelectQuery.selectViewport()
          break
        default:
          throw new Error(task.cmd)
      }
      switch (task.type) {
        case 'boundingClientRect':
          alipayNodeRef.boundingClientRect().exec((my_reses) => done(nodeRef, my_reses[0]))
          break
        case 'context': {
          const node = this.onekit_nodes[nodeRef.selector]
          const id = node.props.onekitId
          let context
          switch (node.is) {
            case '/weixin2alipay/ui/canvas/canvas':
              context = my.createCanvasContext(id)
              break
            case '/weixin2alipay/ui/video/video':
              context = new VideoContext(my.createVideoContext(id), id)
              break
            default:
              throw new Error(node.is)
          }
          done(nodeRef, context)
        }
          break
        case 'fields':
          alipayNodeRef.boundingClientRect().exec((my_reses) => {
            const my_res = my_reses[0]
            const wx_res = {}
            if (nodeRef.fields.size) {
              wx_res.width = my_res.width
              wx_res.height = my_res.height
            }
            if (nodeRef.fields.node && nodeRef.selector) {
              wx_res.node = this.onekit_nodes[nodeRef.selector]
            }
            done(nodeRef, wx_res)
          })
          break
        case 'node':
          done(nodeRef, this.onekit_nodes[nodeRef.selector])
          break
        case 'scrollOffset':
          alipayNodeRef.scrollOffset().exec((my_reses) => {
            const my_res = my_reses[0]
            const wx_res = {
              id: nodeRef.selector,
              dataset: {},
              scrollLeft: my_res.scrollLeft,
              scrollTop: my_res.scrollTop,
              scrollWidth: my_res.scroll,
              scrollHeight: my_res.scrollHeight,
            }
            done(nodeRef, wx_res)
          })
          break
        default:
          throw new Error(task.type)
      }
    }
    next()
  }
}
