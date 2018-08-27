import axios from 'axios'

let api = {
  getPendingLists: '/api/obpm/runtime/getPendingLists?currpage=1&pagelines=200',
  getProcessedLists: '/api/obpm/runtime/getProcessedLists?currpage=1&pagelines=200',
  inShowPermission: '/api/obpm/runtime/inShowPermission'
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

export {
  getPendingLists,
  getProcessedLists,
  inShowPermission
}
