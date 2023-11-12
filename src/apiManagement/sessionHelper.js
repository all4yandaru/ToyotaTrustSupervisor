import API from './apiHelper';

const loginSession = async params => {
  return API('api/v1/user/login', {
    method: 'POST',
    head: {
      'Content-Type': 'application/json',
    },
    body: params,
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export default {loginSession};
