import axiosApi from  './axiosApi';

export const UserHelper = {
    login:(form)=>{
        return axiosApi.post('/authorization/login',form);
        
    },
    register:(form)=>{
        return axiosApi.post('/authorization/signup',form)
    }
}