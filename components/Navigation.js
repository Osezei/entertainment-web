import React from "react";
import Link from "next/link";
import { url } from "@/url";
import Image from "next/image";
import HomeButton from "../public/assets/logo.svg";
import UserPic from "../public/assets/image-avatar.png";

const Navigation = ({ activePage }) => {
  return (
    <section className="h-[72px] w-min-full mx-[25px] lg:h-[960px] lg:w-[96px]  rounded-[10px] lg:rounded-[20px] bg-[#161D2F] flex justify-around lg:flex-col lg:place-items-center">
      <Image
        src={HomeButton}
        alt=""
        width={32}
        height={26}
        className="lg:mt-[35px] lg:mb-[75px] object-contain"
      />
      <div className="lg:h-[200px] flex lg:flex-col justify-between my-auto lg:my-0">
        {url.map((item) => {
          const { id, title, url, button } = item;
          return (
            <Link
              key={id}
              href={url}
              className={`text-2xl ease-in-out duration-300 hover:text-[#FC4747] mr-4 lg:mr-0 ${
                activePage === title ? "text-white " : "text-[#5A698F]"
              }`}
            >
              {button}
            </Link>
          );
        })}
      </div>
      <Image
        src={UserPic}
        width={32}
        height={32}
        alt="userpic"
        className="object-contain"
      />
    </section>
  );
};

export default Navigation;
