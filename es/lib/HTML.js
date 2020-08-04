export default class HTML {
  static html2nodes(html) {
    function _html2node(xParent) {
      var nodes = [];
      for (var xNode of xParent.childNodes) {
        var node;
        switch (xNode.nodeType) {
          case 3:
            node = {
              type: "text",
              text: xNode.nodeValue
            };
            break;
          case 1:
            node = {
              name: xNode.tagName.toLowerCase(),
              children: _html2node(xNode),
              attrs: {}
            };
            if (xNode.attributes["class"]) {
              node.attrs.class = xNode.attributes["class"].value;
            }
            if (xNode.attributes.style) {
              node.attrs.style = xNode.attributes.style.value;
            }
            break;
          default:
            console.warn(xNode.nodeType);
            node = null;
            break;
        }
        if (node) { nodes.push(node); }
      }
      return nodes;
    }
    var document = new DOMParser().parseFromString(html, 'text/html');
    return _html2node(document.querySelector('body'));
  }
  static nodes2html(nodes) {
    function _node2html(node) {
      var selfCloses = ["br","img"];
      var html="";
      switch(node.type){
        case "text":return node.text;
        default:
        var attributs = "";
        if(node.attrs){
          for(var key in node.attrs){
            var value =  node.attrs[key];
            attributs+=` ${key}="${value}"`;
          }
        }
        //
        var children = node.children?HTML.nodes2html(node.children):"";
        if(selfCloses.indexOf(node.name)>=0){
          return `<${node.name}${attributs}/>`;
        }else{
          return `<${node.name}${attributs}>${children}</${node.name}>`;
        }
      }
    }
    var html = "";
    for (var node of nodes) {
      html += _node2html(node);
    }
    return html;
  }
}