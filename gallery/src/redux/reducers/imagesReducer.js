import {
  FETCHING_IMAGES_REQUEST,
  FETCHING_IMAGES_SUCCESS,
  FETCHING_IMAGES_FAIL
} from '../actions/types';

const initialState = {
  images: [],
  isLoading: false,
  errorMessage: ''
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_IMAGES_REQUEST:
      return { ...state, isLoading: true };
    case FETCHING_IMAGES_SUCCESS:
      return { ...state, isLoading: false, images: action.payload };
    case FETCHING_IMAGES_FAIL:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default imagesReducer;
