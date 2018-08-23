import axios from 'axios'

let api = {
  getInfo: 'api/duban/getInfo'
}

const getInfo = () => {
  return axios.get(
    api.getInfo
  )
}

export {
  getInfo
}

axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log(response)
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
