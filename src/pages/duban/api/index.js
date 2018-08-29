import axios from 'axios'

let api = {
  getPendingLists: '/api/obpm/runtime/getPendingLists?currpage=1&pagelines=4',
  getProcessedLists: '/api/obpm/runtime/getProcessedLists?currpage=1&pagelines=4',
  inShowPermission: '/api/obpm/runtime/inShowPermission',
  getOfficeAndLeaders: '/api/obpm/getOfficeAndLeaders',
  countPendingItems: '/api/obpm/countPendingItems',
  getAllTasks: '/api/obpm/getAllTasks'
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

const countPendingItems = (parm) => {
  return axios.get(
    api.countPendingItems + `?leaderId=${parm.leaderId}&officeId=${parm.officeId}&pageStart=${parm.pageStart}&num=4`
  )
}

const getAllTasks = () => {
  return axios.get(
    api.getAllTasks
  )
}

export {
  getPendingLists,
  getProcessedLists,
  inShowPermission,
  getOfficeAndLeaders,
  countPendingItems,
  getAllTasks
}
