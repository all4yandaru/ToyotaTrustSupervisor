import axios from 'axios';
import {BASE_URL} from './url';

const API = async (
  url,
  options = {
    method: 'GET',
    body: {},
    head: {},
  },
) => {
  const request = {
    baseURL: BASE_URL,
    method: options.method,
    timeout: 10000,
    url,
    headers: options.head,
    responseType: 'json',
  };
  if (
    request.method === 'POST' ||
    request.method === 'PUT' ||
    request.method === 'DELETE'
  )
    request.data = options.body;

  const res = await axios(request);

  if (res.status === 200) {
    return res.data;
  } else {
    return res;
  }
};

export default API;
