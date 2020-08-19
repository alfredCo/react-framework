import axios from 'axios';

export default {
    login(data){
        return axios({
            method: "POST",
            url: "/awstack-user/v1/login",
            data: data
        })
    }
}