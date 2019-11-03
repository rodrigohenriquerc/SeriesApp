import {
  SET_FIELD,
  SERIE_SUCCESSFULLY_SAVED,
  SET_WHOLE_SERIE,
  RESET_FORM
} from '../actions';

const INITIAL_STATE = {
  title: '',
  gender: 1,
  rate: 0,
  img: '',
  description: ''
}

export default serieFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FIELD:
      const newState = { ...state }
      newState[action.field] = action.value;
      return newState;
    case RESET_FORM:
    case SERIE_SUCCESSFULLY_SAVED:
      return INITIAL_STATE;
    case SET_WHOLE_SERIE:
      return action.serie;
    default:
      return state;
  }
}