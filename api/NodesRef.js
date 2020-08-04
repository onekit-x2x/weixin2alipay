import SelectorQuery from "./SelectorQuery";
export default class NodesRef {
    constructor(aliapySelectQuery) {
        this.aliapySelectQuery = aliapySelectQuery;
    }
    fields(fields) {
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.selectAll('.all').boundingClientRect()
        // this.aliapySelectQuery.select('selector').scrollOffset()
        this.aliapySelectQuery.selectViewport('selector').boundingClientRect()
        this.aliapySelectQuery.selectViewport('selector').scrollOffset().exec((ret) => {
            console.log(ret);
        })
        return new SelectorQuery(this.aliapySelectQuery)
    }
    boundingClientRect() {
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.selectAll('.all').boundingClientRect()
        // this.aliapySelectQuery.select('selector').scrollOffset()
        this.aliapySelectQuery.selectViewport('selector').boundingClientRect()
        this.aliapySelectQuery.selectViewport('selector').scrollOffset().exec((ret) => {
            console.log(ret);
        })
    }
    context() {
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.selectAll('.all').boundingClientRect()
        // this.aliapySelectQuery.select('selector').scrollOffset()
        this.aliapySelectQuery.selectViewport('selector').boundingClientRect()
        this.aliapySelectQuery.selectViewport('selector').scrollOffset().exec((ret) => {
            console.log(ret);
        })
    }
    node() {
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.selectAll('.all').boundingClientRect()
        // this.aliapySelectQuery.select('selector').scrollOffset()
        this.aliapySelectQuery.selectViewport('selector').boundingClientRect()
        this.aliapySelectQuery.selectViewport('selector').scrollOffset().exec((ret) => {
            console.log(ret);
        })
    }
    scrollOffset() {
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.select('selector').boundingClientRect()
        // this.aliapySelectQuery.selectAll('.all').boundingClientRect()
        // this.aliapySelectQuery.select('selector').scrollOffset()
        this.aliapySelectQuery.selectViewport('selector').boundingClientRect()
        this.aliapySelectQuery.selectViewport('selector').scrollOffset().exec((ret) => {
            console.log(ret);
        })
    }
}