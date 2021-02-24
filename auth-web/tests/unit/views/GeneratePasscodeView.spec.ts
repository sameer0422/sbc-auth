import { createLocalVue, mount } from '@vue/test-utils'

import GeneratePasscodeView from '@/views/auth/staff/GeneratePasscodeView.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

const mockSession = {
  'NRO_URL': 'Mock NRO URL',
  'NAME_REQUEST_URL': 'Mock Name Request URL'
}

Vue.use(Vuetify)
Vue.use(VueRouter)
document.body.setAttribute('data-app', 'true')

const router = new VueRouter()
const vuetify = new Vuetify({})

describe('GeneratePasscodeView.vue', () => {
  let wrapper: any

  beforeEach(() => {
    sessionStorage.__STORE__['AUTH_API_CONFIG'] = JSON.stringify(mockSession)
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const $t = () => ''

    const store = new Vuex.Store({
      state: {},
      strict: false
    })

    wrapper = mount(GeneratePasscodeView, {
      store,
      localVue,
      router,
      vuetify,
      mocks: { $t }
    })
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('remove email address', () => {
    wrapper.vm.isDialogOpen = true
    const stub = jest.fn()
    wrapper.setMethods({ removeEmailAddress: stub })
    wrapper.find('[data-test="btn-remove-passcode-emailAddress-0"').trigger('click')
    expect(wrapper.vm.removeEmailAddress).toBeCalled()
  })

  it('contains title', () => {
    wrapper.vm.isDialogOpen = true
    expect(wrapper.find('[data-test="title-generate-passcode"]')).toBeTruthy()
    expect(wrapper.find('[data-test="title-generate-passcode"]').text()).toEqual('Generate Passcode')
  })

  it('contains email address input to send', () => {
    wrapper.vm.isDialogOpen = true
    expect(wrapper.find('[data-test="input-passcode-emailAddress-0"]')).toBeTruthy()
  })

  it('close/cancel calls the close() button', () => {
    wrapper.vm.isDialogOpen = true
    const stub = jest.fn()
    wrapper.setMethods({ close: stub })
    wrapper.find('[data-test="btn-close-generate-passcode-dialog-title"]').trigger('click')
    expect(wrapper.vm.close).toBeCalled()
    wrapper.find('[data-test="btn-close-generate-passcode-dialog"]').trigger('click')
    expect(wrapper.vm.close).toBeCalled()
  })

  it('email Rules', () => {
    wrapper.vm.isDialogOpen = true
    wrapper.vm.emailAddresses = [{
      value: '12345'
    }]
    expect(wrapper.vm.isFormValid()).toBeFalsy()
    expect(wrapper.find('[data-test="btn-generate-passcode-send"]').element.disabled).toBeTruthy()
    wrapper.vm.emailAddresses = [{
      value: 'test@dal.ca'
    }]
    expect(wrapper.vm.isFormValid()).toBeTruthy()
  })
})