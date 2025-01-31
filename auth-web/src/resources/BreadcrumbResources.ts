import { BreadcrumbIF } from '@bcrs-shared-components/interfaces'

export const RegistryHomeBreadcrumb: BreadcrumbIF = {
  text: 'Service BC Connect',
  href: `${sessionStorage.getItem('REGISTRY_HOME_URL')}`
}

export const RegistryDashboardBreadcrumb: BreadcrumbIF = {
  text: 'Service BC Connect Dashboard',
  href: `${sessionStorage.getItem('REGISTRY_HOME_URL')}dashboard`
}

export const MyBusinessRegistryBreadcrumb: BreadcrumbIF = {
  text: 'My Business Registry',
  to: { name: 'business' },
  href: `${sessionStorage.getItem('AUTH_WEB_URL')}/business`
}

export const StaffBusinessRegistryBreadcrumb: BreadcrumbIF = {
  text: 'My Staff Business Registry',
  to: { name: 'business' },
  href: `${sessionStorage.getItem('AUTH_WEB_URL')}/business`
}

export const StaffDashboardBreadcrumb: BreadcrumbIF = {
  text: 'Staff Dashboard',
  to: { name: 'active' },
  href: `${sessionStorage.getItem('AUTH_WEB_URL')}/staff/dashboard/active`
}

export const ShortNameMappingBreadcrumb: BreadcrumbIF = {
  text: 'EFT Received Payments',
  to: { name: 'manage-shortnames' },
  href: `${sessionStorage.getItem('AUTH_WEB_URL')}/pay/manage-shortnames`
}

export const ShortNameDetailsBreadcrumb: BreadcrumbIF = {
  text: 'EFT Payment Details',
  to: { name: 'shortnamedetails' }
}

export const ShortNameRefundBreadcrumb: BreadcrumbIF = {
  text: 'Refund Information',
  to: { name: 'shortnamerefund' }
}

export const CreatAccountBreadcrumb: BreadcrumbIF = {
  text: 'Create Account',
  to: { name: 'chooseauthmethodview' }
}

export const InvoluntaryDissolutionBreadcrumb: BreadcrumbIF = {
  text: 'Staff Involuntary Dissolution Batch',
  to: { name: 'involuntary-dissolution' },
  href: `${sessionStorage.getItem('AUTH_WEB_URL')}/staff/involuntary-dissolution`
}
