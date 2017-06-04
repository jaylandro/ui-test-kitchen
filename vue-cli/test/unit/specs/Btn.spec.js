import Vue from 'vue'
import Btn from '@/components/Btn'

describe('Btn.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Btn)
    const vm = new Constructor().$mount()
    expect(vm.$el.innerHTML)
      .to.equal('Submit')
  })
  it('should console log out from test method', () => {
    const Constructor = Vue.extend(Btn)
    const vm = new Constructor().$mount()
    expect(vm.clickBtn())
      .to.equal('hello')
  })
})
