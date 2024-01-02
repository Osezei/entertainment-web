import React, { useState } from "react";
import { useGlobalContext } from "@/context";
import Image from "next/image";
import Svg from "../public/assets/icon-nav-tv-series.svg";
import { BsDot } from "react-icons/bs";
import { TbMovie } from "react-icons/tb";
import BookmarkEmpty from "../public/assets/icon-bookmark-empty.svg";
import BookmarkFull from "../public/assets/icon-bookmark-full.svg";

const Card = ({ title, id, year, category, rating, thumbnail }) => {
  const [toggled, setToggled] = useState(true);

  const handleClick = () => {
    setToggled(!toggled);
  };
  const { addBookmark, removeBookmark } = useGlobalContext();
  let image = `/${thumbnail.regular.small}`;

  // for bookmark
  const movie = {
    id,
    title,
    year,
    category,
    rating,
    thumbnail,
  };
  //end for bookmark

  return (
    <article key={id} className="relative">
      <Image
        //src={`/${thumbnail.regular.small}`}
        src={thumbnail.regular.small}
        width={280}
        height={174}
        alt={title}
        priority
        className="hidden lg:block rounded-lg"
      />
      <Image
        //src={`/${thumbnail.regular.small}`}
        src={thumbnail.regular.small}
        width={220}
        height={140}
        alt={title}
        priority
        className="rounded-lg md:block lg:hidden hidden"
      />
      <Image
        //src={`/${thumbnail.regular.small}`}
        src={thumbnail.regular.small}
        width={164}
        height={110}
        alt={title}
        priority
        className="rounded-lg md:hidden"
      />
      <section>
        <div className="mt-2 text-[13px] font-light flex gap-x-2 opacity-50">
          <p>{year}</p>
          <p className="my-auto">
            <BsDot />
          </p>
          <p className="flex">
            {category === "TV Series" ? (
              <Image
                src={Svg}
                width={12}
                height={12}
                alt="svg"
                className="mr-[6px] object-contain my-auto"
              />
            ) : (
              <span className="my-auto mr-[6px]">
                <TbMovie />
              </span>
            )}
            {category}
          </p>
          <p className="my-auto">
            <BsDot />
          </p>
          <p>{rating}</p>
        </div>
        <div className="mt-[5px]">
          <p className="text-[18px] font-medium">{title}</p>
        </div>
      </section>
      {/* <button onClick={() => addBookmark(movie, movie.id)}>bookmark</button>
      <button onClick={() => removeBookmark(movie, movie.id)}>remove</button> */}
      {/* <div className=""></div> */}
      {/* bookmark button start */}
      <div className=" absolute top-0 right-0 lg:top-[16px] lg:right-[16px] border-[16px] border-opacity-[0.5006] rounded-full border-[#10141E] flex justify-center place-items-center">
        <button onClick={handleClick} className="overflow-hidden">
          {toggled ? (
            <p onClick={() => addBookmark(movie, movie.id)}>
              {" "}
              <Image
                src={BookmarkEmpty}
                width={12}
                height={14}
                alt="bookmark"
              />
            </p>
          ) : (
            <p onClick={() => removeBookmark(movie, movie.id)}>
              {" "}
              <Image
                src={BookmarkFull}
                width={12}
                height={14}
                alt="remove from bookmark"
              />
            </p>
          )}
        </button>
      </div>

      {/* bookmark button end */}
    </article>
  );
};

export default Card;
