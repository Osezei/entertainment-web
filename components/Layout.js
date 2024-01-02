import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";
import SearchMovies from "./SearchMovies";

export const Layout = ({ children, activePage }) => {
  return (
    <section className="text-white">
      <Head>
        <title>{activePage} -- movies</title>
      </Head>
      <div className="md:mt-[23px] lg:mt-8 flex flex-col lg:flex-row justify-center md:gap-x-[36px]">
        <Navigation activePage={activePage} />
        <main className="mt-8 lg:w-[1224px] mx-[16px] md:mx-[25px] lg:mx-0">
          <SearchMovies activePage={activePage} />
          <div>{children}</div>
        </main>
      </div>
    </section>
  );
};
