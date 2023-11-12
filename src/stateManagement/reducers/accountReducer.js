const initialAccountState = {
  account: {},
};

const accountReducer = (state = initialAccountState, action) => {
  switch (action.type) {
    case 'ACC_ADD_DATA':
      console.log('acc add data: ', action.data);
      return {
        ...state,
        account: action.data,
      };

    case 'ACC_DELETE_DATA':
      return {
        ...state,
        account: {},
      };

    default:
      return state;
  }
};

export default accountReducer;
