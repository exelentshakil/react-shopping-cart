import axios from 'axios'

const token = 'yEhDavNkuoSb3c4uQ6aUFvRsPBVJKYSq9Zk8KbLh';
const baseURL = 'http://127.0.0.1:8000/api/v1/';
const auth = {'Authorization': `Bearer ${token}`}

const _axios = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers: auth,
});

export default _axios;

