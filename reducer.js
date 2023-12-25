const reducer = (state, action) => {
  if (action.type === "HANDLE_CATEGORY" && action.payload === "all") {
    return {
      ...state,
      movie_list: state.allMovies,
      activeFilter: action.payload,
    };
  }
  if (action.type === "HANDLE_CATEGORY") {
    let movie_list = state.allMovies;

    movie_list = movie_list.filter(
      (movies) => movies.category === action.payload
    );
    return {
      ...state,
      movie_list,
      activeFilter: action.payload,
    };
  }

  if (action.type === "ADD_BOOKMARK") {
    //state.bookmark.filter((movie) => movie.id === action.payload);

    return {
      ...state,
      bookmark: state.bookmark.filter(
        (movie) => movie.id !== action.payload.id
      ),

      bookmark: [action.payload, ...state.bookmark],
    };
  }
  if (action.type === "REMOVE_BOOKMARK") {
    return {
      ...state,
      bookmark: state.bookmark.filter(
        (movie) => movie.id !== action.payload.id
      ),
    };
  } else {
    throw new Error(`No Matching '${action.type}' - action type`);
  }
};

export default reducer;
