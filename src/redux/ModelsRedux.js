import Axios from 'axios';

/* selectors */
export const getAllModels = ({ models }) => models.data;
export const getModelById = ({ models }, modelId)  => models.data.filter(model => model._id === modelId)[0];

/* action name creator */
const reducerName = 'models';
const createActionName = name => `app/${reducerName}/${name}`;


/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchAllModels = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const state = getState();
    if(!state.models.data) {
      Axios
        .get('http://localhost:8000/api/models')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchSelectedModel = (id) => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let res = await Axios.get(`http://localhost:8000/api/models/${id}`);
      await new Promise((resolve, reject) => resolve());
      dispatch(fetchSuccess(res.data));
    } catch(err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
