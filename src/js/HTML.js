/* eslint-disable no-console */
/* eslint-disable guard-for-in */
export default class HTML {
  static html2nodes(html) {
    function _html2node(xParent) {
      const nodes = []
      for (const xNode of xParent.childNodes) {
        let node
        switch (xNode.nodeType) {
          case 3:
            node = {
              type: 'text',
              text: xNode.nodeValue
            }
            break
          case 1:
            node = {
              name: xNode.tagName.toLowerCase(),
              children: _html2node(xNode),
              attrs: {}
            }
            if (xNode.attributes.class) {
              node.attrs.class = xNode.attributes.class.value
            }
            if (xNode.attributes.style) {
              node.attrs.style = xNode.attributes.style.value
            }
            break
          default:
            console.warn(xNode.nodeType)
            node = null
            break
        }
        if (node) { nodes.push(node) }
      }
      return nodes
    }
    // eslint-disable-next-line no-undef
    const document = new DOMParser().parseFromString(html, 'text/html')
    return _html2node(document.querySelector('body'))
  }

  static nodes2html(nodes) {
    function _node2html(node) {
      const selfCloses = ['br', 'img']
      switch (node.type) {
        case 'text': return node.text
        default: {
          let attributs = ''
          if (node.attrs) {
            for (const key in node.attrs) {
              const value = node.attrs[key]
              attributs += ` ${key}="${value}"`
            }
          }
          //
          const children = node.children ? HTML.nodes2html(node.children) : ''
          if (selfCloses.indexOf(node.name) >= 0) {
            return `<${node.name}${attributs}/>`
          } else {
            return `<${node.name}${attributs}>${children}</${node.name}>`
          }
        }
      }
    }
    let html = ''
    for (const node of nodes) {
      html += _node2html(node)
    }
    return html
  }
}
