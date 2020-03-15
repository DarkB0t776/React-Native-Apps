import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';
import imageReducer from './imageReducer';

export default combineReducers({ imagesReducer, imageReducer });
