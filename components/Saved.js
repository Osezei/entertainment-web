import React from "react";
import { useGlobalContext } from "@/context";
import Card from "./Card";

const Saved = ({ movie }) => {
  const { removeBookmark } = useGlobalContext();
  return (
    <article>
      {movie.title}
      <button onClick={() => removeBookmark(movie, movie.id)}>remove</button>
    </article>
  );
};

export default Saved;
