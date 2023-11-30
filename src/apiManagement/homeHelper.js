import API from './apiHelper';

const dashboards = async token => {
  return API('api/v1/approval/dashboards', {
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

const newCar = async token => {
  return API('api/v1/approval/new-car', {
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

const tradeIn = async token => {
  return API('api/v1/approval/trade-in', {
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

const beliMobil = async (token, id) => {
  return API(`api/v1/approval/new-car/${id}`, {
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

export default {dashboards, newCar, tradeIn, beliMobil};
