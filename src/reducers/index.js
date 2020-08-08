const actionTypes = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
};

const reducer = (state, action) => {

  switch (action.type) {
    case actionTypes.setFavorite:
      return {
        ...state,
        myList: [...state.myList.filter(item => item.id !== action.payload.id), action.payload],
      };

    case actionTypes.deleteFavorite:
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
