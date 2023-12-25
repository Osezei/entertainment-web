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
      <div className="mt-8 flex justify-center gap-x-[36px]">
        <Navigation activePage={activePage} />
        <main className="mt-8 w-[1224px]">
          <SearchMovies activePage={activePage} />
          <div>{children}</div>
        </main>
      </div>
    </section>
  );
};
