const initialSessionState = {
  session: {
    token: '',
  },
};

const sessionReducer = (state = initialSessionState, action) => {
  switch (action.type) {
    case 'SESSION_ADD_DATA':
      console.log('session add data: ', action.data);
      return {
        ...state,
        session: {
          token: action.data,
        },
      };

    case 'SESSION_DELETE_DATA':
      return {
        ...state,
        session: {
          token: '',
        },
      };

    default:
      return state;
  }
};

export default sessionReducer;
