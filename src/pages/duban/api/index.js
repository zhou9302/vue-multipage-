import axios from 'axios'

let api = {
  getPendingLists: '/api/obpm/runtime/getPendingLists?currpage=1&pagelines=4',
  getProcessedLists: '/api/obpm/runtime/getProcessedLists?currpage=1&pagelines=4',
  inShowPermission: '/api/obpm/runtime/inShowPermission',
  getOfficeAndLeaders: '/api/obpm/getOfficeAndLeaders',
  countPendingItems: '/api/obpm/countPendingItems'
}

const getPendingLists = () => {
  return axios.get(
    api.getPendingLists
  )
}

const inShowPermission = () => {
  return axios.get(
    api.inShowPermission
  )
}

const getProcessedLists = () => {
  return axios.get(
    api.getProcessedLists
  )
}

const getOfficeAndLeaders = () => {
  return axios.get(
    api.getOfficeAndLeaders
  )
}

const countPendingItems = () => {
  return axios.get(
    api.countPendingItems
  )
}

export {
  getPendingLists,
  getProcessedLists,
  inShowPermission,
  getOfficeAndLeaders,
  countPendingItems
}
