import React from "react";
import { Layout } from "@/components/Layout";
import { useGlobalContext } from "@/context";
import Card from "@/components/Card";

const Movies = () => {
  const activePage = "movies";
  const { searchTerm, movie_list } = useGlobalContext();

  let movie_movie = [];

  movie_list.filter((movie) => {
    if (movie.category === "Movie") {
      movie_movie.push(movie);
      //console.log(movie_movie);
    } else null;
  });

  return (
    <Layout activePage={activePage}>
      <section className="">
        <p className="capitalize mt-[35px] mb-[38px] leading-[-0.5px] text-[32px] font-light">
          {activePage}
        </p>
        <div className="grid grid-cols-4 gap-x-10 gap-y-8">
          {movie_movie

            .filter((movie) => {
              if (searchTerm === "") {
                // end
                return movie;
              } else if (
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return movie;
              }
            })

            .map((movie) => {
              //const listNumber = movie.length;
              //console.log(listNumber);
              // if (listNumber < 1) {
              //   return (
              //     <>
              //       <p className="text-white">nothing available</p>
              //     </>
              //   );
              // }

              return <Card key={movie.id} {...movie} />;
            })}
        </div>
      </section>
    </Layout>
  );
};

export default Movies;
