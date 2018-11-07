const M = module.exports = {}

const posts = []

M.add = function (post) {
  const id = posts.push(post) - 1
  post.created_at = new Date()
  post.id = id
}

//刪除貼文
M.remove = function(id){
  let post = posts[id]
  posts[id] = null
  return post
}

//編輯貼文
M.modify = function(post){
  posts[post.id] = post
}

M.get = function (id) {
  return posts[id]
}

M.list = function () {
  return posts
}