import Vue from 'vue'
import _ from 'lodash.foreach'

const components = require.context('~/components', false, /[A-Z]\w+\.(vue)$/)
const keys = components.keys()
_(keys, (fileName) => {
  const componentConfig = components(fileName)
  console.log(`component - ${fileName}`)
  const componentName = fileName.split('/').pop().split('.')[0]
  Vue.component(componentName, componentConfig.default || componentConfig)
})
