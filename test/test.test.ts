import { mount } from '@vue/test-utils'

import Test from '../src/Test.vue'

describe('测试 Test.vue', () => {
  test('View', async () => {
    const wrapper = await mount(Test, {
      props: { className: 'className' },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
