import { TbMovie } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa";
import { BiGridSmall } from "react-icons/bi";
import { BsCameraReelsFill } from "react-icons/bs";

export const url = [
  {
    id: 1,
    title: "home",
    url: "/",
    button: <BiGridSmall />,
  },
  {
    id: 2,
    title: "movies",
    url: "/movies",
    button: <TbMovie />,
  },
  {
    id: 3,
    title: "tvseries",
    url: "/tvseries",
    button: <BsCameraReelsFill />,
  },
  {
    id: 4,
    title: "bookmark",
    url: "/bookmark",
    button: <FaBookmark />,
  },
];
