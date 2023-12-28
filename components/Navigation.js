import React from "react";
import Link from "next/link";
import { url } from "@/url";
import Image from "next/image";
import HomeButton from "../public/assets/logo.svg";

const Navigation = ({ activePage }) => {
  return (
    <section className="w-[96px] h-[960px] rounded-[20px] bg-[#161D2F] flex flex-col place-items-center">
      <Image
        src={HomeButton}
        alt=""
        width={32}
        height={26}
        className="mt-[35px] mb-[75px]"
      />
      <div className="h-[200px] flex flex-col justify-between">
        {url.map((item) => {
          const { id, title, url, button } = item;
          return (
            <Link
              key={id}
              href={url}
              className={`text-2xl ease-in-out duration-300 hover:text-[#FC4747]  ${
                activePage === title ? "text-white " : "text-[#5A698F]"
              }`}
            >
              {button}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Navigation;
