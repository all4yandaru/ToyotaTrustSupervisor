import API from './apiHelper';

const insentifHelper = async token => {
  return API('api/v1/incentive', {
    method: 'GET',
    head: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export default {insentifHelper};
