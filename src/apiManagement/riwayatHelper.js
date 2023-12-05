import API from './apiHelper';

const RiwayatTradeIn = async token => {
  return API('api/v1/approval/trade-in/history', {
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

const RiwayatNewCar = async token => {
  return API('api/v1/approval/new-car/history', {
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

const RiwayatNewCarDetail = async (token, id) => {
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

const RiwayatTradeInDetail = async (token, id) => {
  return API(`api/v1/approval/trade-in/${id}`, {
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

const SummaryDetailTradeIn = async (token, id) => {
  return API(`api/v1/approval/trade-in/appraisal-final/${id}`, {
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

export default {
  RiwayatTradeIn,
  RiwayatNewCar,
  RiwayatNewCarDetail,
  RiwayatTradeInDetail,
  SummaryDetailTradeIn,
};
