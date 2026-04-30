/**
 * Backward-compatible data accessors.
 * Existing pages currently call sync getters, so we keep those signatures stable.
 * New async getters are exposed for backend API mode migration.
 */

import {
  getAcademyDataAsync,
  getAcademyDataSync,
  getApolloLeadDataAsync,
  getApolloLeadDataSync,
  getEcommerceDataAsync,
  getEcommerceDataSync,
  getFaqDataAsync,
  getFaqDataSync,
  getInvoiceDataAsync,
  getInvoiceDataSync,
  getLeadsDataAsync,
  getLeadsDataSync,
  getLogisticsDataAsync,
  getLogisticsDataSync,
  getPermissionsDataAsync,
  getPermissionsDataSync,
  getPricingDataAsync,
  getPricingDataSync,
  getProfileDataAsync,
  getProfileDataSync,
  getQuotesDataAsync,
  getQuotesDataSync,
  getResearchDataAsync,
  getResearchDataSync,
  getStatisticsDataAsync,
  getStatisticsDataSync,
  getTasksDataAsync,
  getTasksDataSync,
  getUserDataAsync,
  getUserDataSync
} from '@/services/data/dataAccess'

export const getEcommerceData = () => getEcommerceDataSync()
export const getAcademyData = () => getAcademyDataSync()
export const getLogisticsData = () => getLogisticsDataSync()
export const getInvoiceData = () => getInvoiceDataSync()
export const getUserData = () => getUserDataSync()
export const getPermissionsData = () => getPermissionsDataSync()
export const getProfileData = () => getProfileDataSync()
export const getFaqData = () => getFaqDataSync()
export const getPricingData = () => getPricingDataSync()
export const getStatisticsData = () => getStatisticsDataSync()
export const getQuotesData = () => getQuotesDataSync()
export const getTasksData = () => getTasksDataSync()
export const getLeadsData = () => getLeadsDataSync()
export const getResearchData = () => getResearchDataSync()
export const getApolloLeadData = () => getApolloLeadDataSync()

export const getEcommerceDataAsyncSafe = () => getEcommerceDataAsync()
export const getAcademyDataAsyncSafe = () => getAcademyDataAsync()
export const getLogisticsDataAsyncSafe = () => getLogisticsDataAsync()
export const getInvoiceDataAsyncSafe = () => getInvoiceDataAsync()
export const getUserDataAsyncSafe = () => getUserDataAsync()
export const getPermissionsDataAsyncSafe = () => getPermissionsDataAsync()
export const getProfileDataAsyncSafe = () => getProfileDataAsync()
export const getFaqDataAsyncSafe = () => getFaqDataAsync()
export const getPricingDataAsyncSafe = () => getPricingDataAsync()
export const getStatisticsDataAsyncSafe = () => getStatisticsDataAsync()
export const getQuotesDataAsyncSafe = () => getQuotesDataAsync()
export const getTasksDataAsyncSafe = () => getTasksDataAsync()
export const getLeadsDataAsyncSafe = () => getLeadsDataAsync()
export const getResearchDataAsyncSafe = () => getResearchDataAsync()
export const getApolloLeadDataAsyncSafe = () => getApolloLeadDataAsync()
