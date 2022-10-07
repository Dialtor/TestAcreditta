import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { useAxiosGet } from '../../hooks';
import { getLocalStorage, setLocalStorage } from '../../utilities/localstorage.utility';

const initialState = {
    data: [],
    error: false,
    loading: true,
    currentPage: 1,
}

export const marsSlice = createSlice({
  name: 'mars',
  initialState:  initialState,
  reducers: {
    getDataMars: (state, action) => {
      
      state.data = [action.payload]
    },
    getLoadingMars: (state, action) => {
      state.loading = action.payload
    },
    getErrorMars: (state, action) => {
      state.error = action.payload
    },
    getCurrentPageMars: (state, action) => {
      state.currentPage = action.payload
    }
  }
});


export const getMarsAsync = (currentRover, currentRange, currentPage) =>  (dispatch) => {
  try {
    axios
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${currentRover}/photos?sol=${currentRange}&page=${currentPage}&api_key=aDxJVCfpMO3rARGrOdBGOKuvXJ2NlqTXweeYZutP`)
    .then((res) => {
      dispatch(getDataMars(res.data))
    })
    .catch((err) => {
      dispatch(getErrorMars(true))
    })
    .finally(() => {
      dispatch(getLoadingMars(false))
      
    });
    //  const [response, error, loading] = useAxiosGet();
    // dispatch(getMars(response, error, loading))
  } catch (err) {
    throw new Error(err);
  }
  
};

export const ChangeCurrentPage = (currentPage, value)  => (dispatch) => {
    dispatch(getCurrentPageMars(currentPage + (value)))
}

export const { getDataMars, getErrorMars, getLoadingMars, getCurrentPageMars } = marsSlice.actions;
export default marsSlice.reducer