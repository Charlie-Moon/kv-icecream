import Vue from 'vue'
export default () => {
  Vue.component('ElTable', () => import('element-ui/lib/table'))
}