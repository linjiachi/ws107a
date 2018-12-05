const M = module.exports = {}

const db = {
  profile: {
    // george: {password: 'george123'},
    gigi: {password: 'gigi123'},
    kiki: {password: 'kiki123'}
  },
  users: {
    // george: {posts: []},
    gigi: {
      posts: [
        {id: 0, title: 'Monday: go to school', body: '9:10-12:00 , 13:30-16:20'},
        {id: 1, title: 'Tuesday: go to school', body: '9:10-12:00 , 13:30-16:20'},
        {id: 2, title: 'Wednesday: go to school', body: '9:10-12:00 , 13:30-16:20'},
        {id: 3, title: 'Thursday: go to school', body: '9:10-12:00, 13:30-15:20'},
        {id: 4, title: 'Friday: go to school', body: '10:10-12:00'},
        {id: 5, title: 'Saturday, Sunday: go to the library', body: '9:00-22:00'}
      ]
    },
    kiki: {
      posts: [
        {id: 0, title: '周日吃早餐', body: '吃拉亞'},
        {id: 1, title: '周一吃早餐', body: '吃麥味登'},
        {id: 2, title: '周二吃早餐', body: '照蝸居'},
        {id: 3, title: '周三吃早餐', body: '吃晨間'},
        {id: 4, title: '周四吃早餐', body: '吃甲尚寶'},
        {id: 5, title: '周五吃早餐', body: '吃711'}
      ]
    }
  }
}

M.listUsers = function () {
  return db.users
}

M.login = function (user, password) {
  const profile = db.profile[user]
  console.log('profile=', profile, 'password=', password)
  return (profile.password === password)
}

M.signup = function (user) {
  return db.profile[user] == null
}

M.addUser = function (passport) {
  db.profile[passport.user] = passport
  db.users[passport.user] = {posts: []}
}

M.userPosts = function (user) {
  const userTable = db.users[user] || {}
  console.log('userPosts : user=%s userTable=%j', user, userTable)
  const posts = userTable.posts
  if (posts == null) throw Error('M.userPosts: fail!')
  return posts
}

M.addPost = function (user, post) {
  const posts = M.userPosts(user)
  const id = posts.push(post) - 1
  post.created_at = new Date()
  post.id = id
}

//刪除貼文
M.removePost = function (user, id) {
  const posts = M.userPosts(user)
  let post = posts[id]
  posts[id] = null
  return post
}

//編輯貼文
M.modifyPost = function (user, post) {
  const posts = M.userPosts(user)
  posts[post.id] = post
}

M.getPost = function (user, id) {
  const posts = M.userPosts(user)
  return posts[id]
}

M.listPosts = function (user) {
  const posts = M.userPosts(user)
  return posts
}
