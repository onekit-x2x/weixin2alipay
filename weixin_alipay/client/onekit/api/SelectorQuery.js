import fields from './fields'
export default class SelectorQuery {

  boundingClientRect() {

  }
  exec() {

  }
  scrollOffset() {

  }
  select(selector) {
    console.log("xxxxxxxxxxxxxxxx", selector)
    new fields(selector)
    if (selector) {
    this.select(selector).scrollOffset().exec((ret) => {
      console.log(ret);
    })
      //  fields({
      //     id: false,
      //     dataset: false,
      //     mark: false,
      //     rect: false,
      //     size: false,
      //     scrollOffset: false,
      //     properties: [],
      //     computedStyle: [],
      //     context: false,
      //     node: false,
      //     function(res) {
      //       console.log(res)
      //     }
      //   })
    }
  }
  selectAll() {

  }
  selectViewport() {

  }
}