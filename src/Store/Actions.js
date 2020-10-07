import axios from 'axios';
import { SET_DASHBOARD_PAGE_VALUES } from './ActionTypes';
import { API_URL } from '../Constants';

const fetchItems = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_DASHBOARD_PAGE_VALUES,
      payload: {
        loading: true,
        error: null,
        items: []
      }
    });
    const data = await axios({
      method: 'get',
      url: API_URL,
    }).then((response) => response.data);
    dispatch({
      type: SET_DASHBOARD_PAGE_VALUES,
      payload: {
        loading: false,
        error: null,
        items: data.clients
      }
    });
  } catch (e) {
    dispatch({
      type: SET_DASHBOARD_PAGE_VALUES,
      payload: {
        loading: false,
        error: e.message || 'Something went wrong. Please try again later'
      }
    });
  }
};

export default fetchItems;
