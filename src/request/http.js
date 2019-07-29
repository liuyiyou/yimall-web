// 在http.js中引入axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
import { Toast } from 'vant';


axios.defaults.timeout = 10000;

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            if (res.data.success) {
                resolve(res.data);
            } else {
                Toast(res.data.msg);
                reject(err.data)
            }
        }).catch(err => {
            reject(err.data)
        })
    });
}

export function del(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            params: params
        }).then(res => {
            if (res.data.success) {
                resolve(res.data);
            } else {
                Toast(res.data.msg);
                reject(err.data)
            }
        }).catch(err => {
            reject(err.data)
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function postWithFormData(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                if (res.data.success) {
                    resolve(res.data);
                } else {
                    Toast(res.data.msg);
                    reject(err.data)
                }
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: params,
        }).then(res => {
            if (res.data.success) {
                resolve(res.data);
            } else {
                Toast(res.data.msg);
                reject(err.data)
            }
        })
            .catch(err => {
                reject(err.data)
            });
    });
}


export function putFormData(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, QS.stringify(params))
            .then(res => {
                if (res.data.success) {
                    resolve(res.data);
                } else {
                    Toast(res.data.msg);
                    reject(err.data)
                }
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

export function put(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: url,
            data: params,
        }).then(res => {
            if (res.data.success) {
                resolve(res.data);
            } else {
                Toast(res.data.msg);
                reject(err.data)
            }
        })
            .catch(err => {
                reject(err.data)
            });
    });
}