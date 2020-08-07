import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    var url1,url2,url3;
    if (config.url.indexOf("awstack-maas") > -1) {
        url1 = config.url.split("awstack-maas");
        config.url = window.GLOBALCONFIG.APIHOST.MAAS + url1[1];
    }else if(config.url.indexOf("awstack-user") > -1){
        url2 = config.url.split("awstack-user");
        config.url = window.GLOBALCONFIG.APIHOST.BASE + url2[1];
    }else if(config.url.indexOf("awstack-resource") > -1){
        url3 = config.url.split("awstack-resource");
        config.url = window.GLOBALCONFIG.APIHOST.RESOURCE + url3[1];
    }

    var auth_token = localStorage.$AUTH_TOKEN;
    config.headers["X-Auth-Token"] = auth_token;
    config.headers["X-Register-Code"] =config.headers["X-Register-Code"]?config.headers["X-Register-Code"]:localStorage.regionKey;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (res) {
    // Do something with response data
    if (/\.html/.test(res.config.url)) {
        return res;
    }
    
    //登录超时
    if (res.data.code == "00010105") {
        return res.data;
    }
    
    if (res.config.method.toUpperCase() != "GET" && res.data.code==0) {
        return res.data;
    }

    if(res.data.code!=0){
        return res.data;
        
    };
    
    return res.data;
}, function (error) {
    // Do something with response error
    Notification({
        //title: error.message,
        message: error.message,
        duration: 5000,
        type: "error",
        customClass: "error"
    });
    return error;
});
export default axios