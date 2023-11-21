import API from './apiHelper';

const tradeInHelper = async params => {
  return API('api/v1/trade-in/tracking', {
    method: 'GET',
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

const newCarHelper = async params => {
  return API('api/v1/new-car/tracking', {
    method: 'GET',
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

export default {tradeInHelper, newCarHelper};
