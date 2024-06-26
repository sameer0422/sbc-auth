import { Wrapper, createLocalVue, shallowMount } from '@vue/test-utils'
import StaffActiveAccountsTable from '@/components/auth/staff/account-management/StaffActiveAccountsTable.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import initialize from '@/plugins/i18n'
import { useStaffStore } from '@/stores'

Vue.use(VueRouter)
Vue.use(Vuetify)
const i18n = initialize(Vue)

const vuetify = new Vuetify({})
const router = new VueRouter()

describe('StaffActiveAccountsTable.vue', () => {
  let wrapper: Wrapper<StaffActiveAccountsTable>

  const config = {
    'AUTH_API_URL': 'https://localhost:8080/api/v1/11',
    'PAY_API_URL': 'https://pay-api-dev.apps.silver.devops.gov.bc.ca/api/v1'
  }

  sessionStorage['AUTH_API_CONFIG'] = JSON.stringify(config)

  beforeEach(() => {
    const localVue = createLocalVue()

    const staffStore = useStaffStore()
    staffStore.suspendedStaffOrgs = [
      {
        'modified': '2020-12-10T21:05:06.144977+00:00',
        'name': 'NEW BC ONLINE TECH TEAM',
        'orgType': 'PREMIUM',
        'orgStatus': 'ACTIVE',
        'products': [
          2342,
          2991
        ],
        'statusCode': 'ACTIVE',
        'suspendedOn': '2020-12-01T17:52:03.747200+00:00'
      }
    ] as any

    const $t = () => ''
    wrapper = shallowMount(StaffActiveAccountsTable, {
      localVue,
      vuetify,
      router,
      i18n,
      mocks: { $t }
    })

    vi.resetModules()
    vi.clearAllMocks()
  })

  afterEach(() => {
    wrapper.destroy()
  })
  // TOFIX fix orgs undefiend
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('Should have data table', () => {
    expect(wrapper.find('.account-list')).toBeTruthy()
  })
})
