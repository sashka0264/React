import * as axios from "axios";

const base = axios.create({
  withCredentials: true,
  // withCredentials (переводится как ваша авторизованность) - чтобы цепануть cookie 
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY":"9c4c0b67-afad-4fc5-8099-60e295f78a94"}
});

const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return base.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  getDeleteUser(id) {
    return base.delete(`follow/${id}`).then(response => response.data)
  },
  getPostUser(id) {
    return base.post(`follow/${id}`).then(response => response.data)
  }
}

const profileAPI = {
  getProfile(userId) {
    return base.get(`profile/${userId}`).then(response => response.data)
  },
  getStatus(userId) {
    return base.get(`profile/status/${userId}`).then(response => response.data)
  },
  updateStatus(status) {
    return base.put(`profile/status`, {status: status}).then(response => response.data)
  }
}

const authAPI = {
  getMe() {
    return base.get(`auth/me`).then(response => response.data)
  },
  logIn(email, password, rememberMe) {
    return base.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
  }, 
  logOut() {
    return base.delete(`auth/login`)
  }
}


export {usersAPI, profileAPI, authAPI};
