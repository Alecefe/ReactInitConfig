/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-parens */
const actionTypes = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
};

export const setFavorite = payload => ({
  type: actionTypes.setFavorite,
  payload,
});

export const deleteFavorite = payload => ({
  type: actionTypes.deleteFavorite,
  payload,
});
