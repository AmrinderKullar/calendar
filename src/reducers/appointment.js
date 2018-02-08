import { credentials } from '../utils/dummyData';

const UPDATE_FIELD = 'APPOINTMENT/UPDATE_FIELD';
const LOGIN_SUCCESS = 'APPOINTMENT/LOGIN_SUCCESS';
const LOGIN_FAILED = 'APPOINTMENT/LOGIN_FAILED';

const defaultState = {
  username: '',
  password: '',
  usernameErrorMessage: undefined,
  passwordErrorMessage: undefined,
};

const appointment = (state = defaultState, action) => {
  switch (action) {
    case UPDATE_FIELD: {
      const { fieldName, value } = action;
      return {
        ...state,
        [fieldName]: value,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        username: '',
        password: '',
        usernameErrorMessage: undefined,
        passwordErrorMessage: undefined,
        success: true,
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        username: '',
        password: '',
        usernameErrorMessage:
          'Please make sure the password and username are correct',
      };
    }

    default: {
      return state;
    }
  }
};

export default appointment;
