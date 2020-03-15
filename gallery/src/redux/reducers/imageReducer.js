import {
  FETCHING_IMAGE_REQUEST,
  FETCHING_IMAGE_SUCCESS,
  FETCHING_IMAGE_FAIL
} from '../actions/types';

const initialState = {
  imageUrl: '',
  isLoading: false,
  errorMessage: ''
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_IMAGE_REQUEST:
      return { ...state, isLoading: true };
    case FETCHING_IMAGE_SUCCESS:
      return { ...state, isLoading: false, imageUrl: action.payload };
    case FETCHING_IMAGE_FAIL:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default imageReducer;
