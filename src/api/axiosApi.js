/**
 * name: instance.js
 * desc: the axios instance should be decalred here.
 */

 import axios from 'axios';

 /**
  * declare the instance.
  */
 const instance = axios.create({
     baseURL: "http://admin.comprehensive-first-aid.net/api",
     params: {},
 });
 
 /**
  * export instance as default.
  */
 export default instance;