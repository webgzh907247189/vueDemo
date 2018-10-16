import Vue from 'vue'

Vue.component('jsxExample', {
  render (h) {
    return <div id="foo">
      <test data={{name: '11',sex: '222'}}></test>
    </div>
  }
})


Vue.component('test', {
  render (h) {
    let data = this.data

    return <div id="test">
      <p>{data.name}</p>
      <p>{data.sex}</p>
    </div>
  },
  props: ['data']
})