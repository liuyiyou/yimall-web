// import request from '@/utils/request'


import { axios } from "axios";

export function fetchlist () {
  axios.get('/http://localhost:9999/user/delivery/list')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}



