import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL : 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY" : "77ab2db8-601f-459a-b48d-78248b31ac9d"
  }
})

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 6){

    return(
      instance.get(`users?page=${currentPage}&count=${pageSize}`,{
            withCredentials: true,
        })
        .then(response => {
          return response.data;
        })
    )
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}
export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  }
}


