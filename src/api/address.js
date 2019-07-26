import request from '@/utils/request'

export function fetchlist (params) {
  return request({
    url: '/address/list',
    method: 'get',
    params: params
  })
}
