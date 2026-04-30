import { isApiMode } from '@/services/config/appConfig'
import { httpGet } from '@/services/http/client'

// Data Imports
import { db as eCommerceData } from '@/fake-db/apps/ecommerce'
import { db as academyData } from '@/fake-db/apps/academy'
import { db as vehicleData } from '@/fake-db/apps/logistics'
import { db as invoiceData } from '@/fake-db/apps/invoice'
import { db as userData } from '@/fake-db/apps/userList'
import { db as permissionData } from '@/fake-db/apps/permissions'
import { db as profileData } from '@/fake-db/pages/userProfile'
import { db as faqData } from '@/fake-db/pages/faq'
import { db as pricingData } from '@/fake-db/pages/pricing'
import { db as statisticsData } from '@/fake-db/pages/widgetExamples'
import { db as quotesData } from '@/fake-db/pages/quotes'
import { db as tasksData } from '@/fake-db/apps/task'
import { db as leadData } from '@/fake-db/apps/lead'
import { db as researchData } from '@/fake-db/apps/research'
import { db as apolloLeadData } from '@/fake-db/apps/apolloLeads'

const SWAP_READY_NOTICE =
  '[DataMode:api] Async API getters are available. Migrate callsites from sync getters to async getters before enabling api mode in production.'

const createSource = ({ endpoint, fallback }) => ({ endpoint, fallback })

const dataSources = {
  ecommerce: createSource({ endpoint: '/apps/ecommerce', fallback: eCommerceData }),
  academy: createSource({ endpoint: '/apps/academy', fallback: academyData }),
  logistics: createSource({ endpoint: '/apps/logistics', fallback: vehicleData }),
  invoice: createSource({ endpoint: '/apps/invoice', fallback: invoiceData }),
  users: createSource({ endpoint: '/apps/user-list', fallback: userData }),
  permissions: createSource({ endpoint: '/apps/permissions', fallback: permissionData }),
  profile: createSource({ endpoint: '/pages/profile', fallback: profileData }),
  faq: createSource({ endpoint: '/pages/faq', fallback: faqData }),
  pricing: createSource({ endpoint: '/pages/pricing', fallback: pricingData }),
  statistics: createSource({ endpoint: '/pages/widget-examples', fallback: statisticsData }),
  quotes: createSource({ endpoint: '/pages/quotes', fallback: quotesData }),
  tasks: createSource({ endpoint: '/apps/tasks', fallback: tasksData }),
  leads: createSource({ endpoint: '/apps/leads', fallback: leadData }),
  research: createSource({ endpoint: '/apps/research', fallback: researchData }),
  apolloLeads: createSource({ endpoint: '/apps/apollo-leads', fallback: apolloLeadData })
}

const readSync = key => {
  if (isApiMode()) {
    console.warn(SWAP_READY_NOTICE)
  }

  return dataSources[key].fallback
}

const readAsync = async key => {
  if (!isApiMode()) return dataSources[key].fallback

  try {
    return await httpGet(dataSources[key].endpoint)
  } catch {
    return dataSources[key].fallback
  }
}

export const getEcommerceDataSync = () => readSync('ecommerce')
export const getAcademyDataSync = () => readSync('academy')
export const getLogisticsDataSync = () => readSync('logistics')
export const getInvoiceDataSync = () => readSync('invoice')
export const getUserDataSync = () => readSync('users')
export const getPermissionsDataSync = () => readSync('permissions')
export const getProfileDataSync = () => readSync('profile')
export const getFaqDataSync = () => readSync('faq')
export const getPricingDataSync = () => readSync('pricing')
export const getStatisticsDataSync = () => readSync('statistics')
export const getQuotesDataSync = () => readSync('quotes')
export const getTasksDataSync = () => readSync('tasks')
export const getLeadsDataSync = () => readSync('leads')
export const getResearchDataSync = () => readSync('research')
export const getApolloLeadDataSync = () => readSync('apolloLeads')

export const getEcommerceDataAsync = () => readAsync('ecommerce')
export const getAcademyDataAsync = () => readAsync('academy')
export const getLogisticsDataAsync = () => readAsync('logistics')
export const getInvoiceDataAsync = () => readAsync('invoice')
export const getUserDataAsync = () => readAsync('users')
export const getPermissionsDataAsync = () => readAsync('permissions')
export const getProfileDataAsync = () => readAsync('profile')
export const getFaqDataAsync = () => readAsync('faq')
export const getPricingDataAsync = () => readAsync('pricing')
export const getStatisticsDataAsync = () => readAsync('statistics')
export const getQuotesDataAsync = () => readAsync('quotes')
export const getTasksDataAsync = () => readAsync('tasks')
export const getLeadsDataAsync = () => readAsync('leads')
export const getResearchDataAsync = () => readAsync('research')
export const getApolloLeadDataAsync = () => readAsync('apolloLeads')
