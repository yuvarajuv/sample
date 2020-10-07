import { SET_DASHBOARD_PAGE_VALUES } from './ActionTypes';

const initialState = {
  loading: true,
  error: null,
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_PAGE_VALUES: return {
      ...state,
      ...action.payload
    };
    default: return state;
  }
};

export default reducer;
