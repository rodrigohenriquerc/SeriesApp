import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value
  }
}

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
  type: SET_WHOLE_SERIE,
  serie
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM
});

export const SERIE_SUCCESSFULLY_SAVED = 'SERIE_SUCCESSFULLY_SAVED';
export const serieSuccessfullySaved = () => ({
  type: SERIE_SUCCESSFULLY_SAVED
});

export const saveSerie = serie => {
  const { currentUser } = firebase.auth();
  return async dispatch => {
    try {
      if (serie.id) {
        await firebase
          .database()
          .ref(`/users/${currentUser.uid}/series/${serie.id}`)
          .set(serie);
      }
      else {
        await firebase
          .database()
          .ref(`/users/${currentUser.uid}/series`)
          .push(serie);
      }
      dispatch(serieSuccessfullySaved);
    }
    catch (err) {
      console.log('Erro no Firebase: ', err);
    }
    console.log('Olhe no console do Firebase.');
  }
}