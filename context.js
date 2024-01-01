import React, { useContext, useReducer, useEffect, useState } from "react";
import { data } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [bookmarkList, setBookmarkList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (bookmarkList?.length > 0) {
      ls?.setItem("bookmark", JSON.stringify(bookmarkList));
    }
  }, [bookmarkList]);

  useEffect(() => {
    if (ls && ls.getItem("bookmark")) {
      setBookmarkList(JSON.parse(ls.getItem("bookmark")));
    }
  }, []);

  const initialState = {
    movie_list: data,
    allMovies: data,
    activeFilter: "all",
    isTrending: false,
    bookmark: bookmarkList,
  };
  //handling bookmark

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(state.bookmark));
  }, [state.bookmark]);

  const moviesCategory = (value) => {
    dispatch({ type: "HANDLE_CATEGORY", payload: value });
  };
  const removeBookmark = (movie) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: movie });
  };

  const addBookmark = (movie) => {
    dispatch({ type: "ADD_BOOKMARK", payload: movie });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        moviesCategory,
        searchTerm,
        setSearchTerm,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
