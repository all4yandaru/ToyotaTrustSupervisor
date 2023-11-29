import API from './apiHelper';

const tradeInHelper = async token => {
  return API('api/v1/approval/trade-in/tracking', {
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

const newCarHelper = async token => {
  return API('api/v1/approval/new-car/tracking', {
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

export default {tradeInHelper, newCarHelper};
