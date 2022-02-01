import Axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'

export const ApiCaller = (apiCallerConfig: AxiosRequestConfig) => {
  Axios.interceptors.request.use(
    async config => {
      return config
    },
    error => {
      return Promise.reject(error)
    },
  )
  Axios.interceptors.response.use(
    response => {
      try {
        if (response?.data?.message && response?.data?.message.length > 0) {
          if (typeof response.data.message === 'string') {
            message.error(response?.data?.message)
          } else {
            response?.data?.message?.forEach((item: string) => {
              if (item) {
                message.error(item)
              }
            })
          }
        }
      } catch (error) {}
      return response
    },
    error => {
      if (!error.response) {
        message.error('Internet access error')
        return false
      }
      if (error.response.status >= 500) {
        message.error('Internal server error')
        return false
      }
      if (error.response.status === 401 && window.location.pathname !== '/authenticate/login') {
        return 401
      }
      return error.response
    },
  )
  return Axios.request(apiCallerConfig)
}
