/* eslint-disable camelcase */
import HTML from '../../js/HTML'
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
  },
  didMount() {
    let nodes = this.props.nodes
    if (typeof (nodes) === 'string') {
      nodes = HTML.html2nodes(nodes)
      this.setData({nodes})
    }
  },
  didUpdate() { },
  didUnmount() { },
  methods: {

  },

})
