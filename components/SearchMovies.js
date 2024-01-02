import React from "react";
import { useGlobalContext } from "@/context";
import { BiSearch } from "react-icons/bi";

const SearchMovies = ({ activePage }) => {
  const { setSearchTerm } = useGlobalContext();
  if (activePage === "home") {
    return (
      <section className="flex mb-[26px] md:mb-[35px] ml-[16px] md:ml-0">
        <p className="my-auto text-white pr-[16px] lg:pr-6 text-2xl">
          <BiSearch />
        </p>
        <form>
          <input
            index="searchInput"
            type="text"
            placeholder={`Search for Movies or TV series`}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className="text-white bg-transparent w-[400px] focus:outline-none capitalize"
          />
        </form>
      </section>
    );
  }

  if (activePage === "bookmark") {
    return (
      <section className="flex mb-[35px]">
        <p className="my-auto text-white pr-6 text-2xl">
          <BiSearch />
        </p>
        <form>
          <input
            index="searchInput"
            type="text"
            placeholder={`Search for Bookmarked shows`}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className="text-white bg-transparent min-w-max lg:w-[400px] focus:outline-none capitalize"
          />
        </form>
      </section>
    );
  }

  return (
    <section className="flex mb-[26px] md:mb-[35px]">
      <p className="my-auto text-white pr-[16px] md:pr-6 text-[16px] md:text-2xl">
        <BiSearch />
      </p>
      <form>
        <input
          index="searchInput"
          type="text"
          placeholder={`Search for ${activePage}`}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="text-white bg-transparent min-w-max lg:w-[400px] focus:outline-none capitalize"
        />
      </form>
    </section>
  );
};

export default SearchMovies;
