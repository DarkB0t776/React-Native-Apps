import {
  FETCHING_IMAGE_REQUEST,
  FETCHING_IMAGE_SUCCESS,
  FETCHING_IMAGE_FAIL
} from './types';

export const fetchingImageRequest = () => ({
  type: FETCHING_IMAGE_REQUEST
});
export const fetchingImageSuccess = json => ({
  type: FETCHING_IMAGE_SUCCESS,
  payload: json
});
export const fetchingImageFail = error => ({
  type: FETCHING_IMAGE_FAIL,
  payload: error
});

export const fetchImage = id => {
  return async dispatch => {
    dispatch(fetchingImageRequest());
    try {
      const response = await fetch(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization:
            'Client-ID ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
        }
      });

      const json = await response.json();
      dispatch(fetchingImageSuccess(json.urls.regular));
    } catch (error) {
      dispatch(fetchingImageFail(error));
    }
  };
};
