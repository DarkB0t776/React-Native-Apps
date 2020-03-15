import {
  FETCHING_IMAGES_REQUEST,
  FETCHING_IMAGES_SUCCESS,
  FETCHING_IMAGES_FAIL
} from './types';

export const fetchingImagesRequest = () => ({ type: FETCHING_IMAGES_REQUEST });
export const fetchingImagesSuccess = json => ({
  type: FETCHING_IMAGES_SUCCESS,
  payload: json
});

export const fetchingImagesFail = error => ({
  type: FETCHING_IMAGES_FAIL,
  payload: error
});

export const fetchImages = () => {
  return async dispatch => {
    dispatch(fetchingImagesRequest());
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos?per_page=5',
        {
          headers: {
            Authorization:
              'Client-ID ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
          }
        }
      );

      const json = await response.json();
      dispatch(fetchingImagesSuccess(json));
    } catch (error) {
      dispatch(fetchingImagesFail(error));
    }
  };
};
