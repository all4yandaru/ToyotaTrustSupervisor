import API from './apiHelper';

const profilHelper = async (token, id) => {
  return API(`api/v1/user/${id}`, {
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

export default {profilHelper};
