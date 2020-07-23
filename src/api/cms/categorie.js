import request from '@/utils/request'

                    
// 查询文章分类列表
export function listCategorie(query) {
  return request({
    url: '/cms/categorie/pageList',
    method: 'get',
    params: query
  })
}

export function listAllCategorie(query) {
  return request({
    url: '/cms/categorie/allList',
    method: 'get',
    params: query
  })
}

// 查询文章分类详细
export function getCategorie(categoryId) {
  return request({
    url: '/cms/categorie/' + categoryId,
    method: 'get'
  })
}

// 新增文章分类
export function addCategorie(data) {
  return request({
    url: '/cms/categorie',
    method: 'post',
    data: data
  })
}

// 修改文章分类
export function updateCategorie(data) {
  return request({
    url: '/cms/categorie',
    method: 'put',
    data: data
  })
}

// 删除文章分类
export function delCategorie(categoryId) {
  return request({
    url: '/cms/categorie/' + categoryId,
    method: 'delete'
  })
}

// 导出文章分类
export function exportCategorie(query) {
  return request({
    url: '/cms/categorie/exportXls',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}