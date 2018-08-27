import axios from 'axios'

let api = {
  getPendingLists: '/api/obpm/runtime/getPendingLists?currpage=1&pagelines=200'
}

const getPendingLists = () => {
  return axios.get(
    api.getPendingLists
  )
}

export {
  getPendingLists
}

// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   console.log(response)
//   return response.data
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error)
// })
