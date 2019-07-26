import { axios } from "axios";

// const service = axios.create({
//     baseURL: "localhost:9999",
//     timeout:5000
// });


//post
export function post(url,params) {
    return new Promise((resolve,reject)=>{
        axios.post(url,params)
        .then(response =>{
            resolve(response.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default{
    post(url,params){
        return post(url,params);
    },
    get(url, params) {
        return get(url, params);
    }
}


