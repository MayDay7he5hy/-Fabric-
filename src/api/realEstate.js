import request from '@/utils/request'

// 新建(管理员)
export function createRealEstate(data) {
  return request({
    url: '/createRealEstate',
    method: 'post',
    data
  })
}

// 获取商品信息(空json{}可以查询所有，指定proprietor可以查询指定客户名下茅台酒)
export function queryRealEstateList(data) {
  return request({
    url: '/queryRealEstateList',
    method: 'post',
    data
  })
}
