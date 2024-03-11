import facebook from "../../public/images/icons/facebook.png";
import instagram from "../../public/images/icons/instagram.png";
import youtube from "../../public/images/icons/youtube.png";
import linkedin from "../../public/images/icons/linkedin.png";
import whatsapp from "../../public/images/icons/whatsapp.png";
import { SocialItemProps } from "./types";

export const requestUrl = "https://olympuseducation.vercel.app/api/";
// export const requestUrl = "http://localhost:3000/api/";

export const socialItems: SocialItemProps[] = [
  {
    label: "Facebook",
    icon: facebook,
    href: "https://www.facebook.com/olympuseducation/",
  },
  {
    label: "Instagram",
    icon: instagram,
    href: "",
  },
  {
    label: "Youtube",
    icon: youtube,
    href: "",
  },
  {
    label: "Linkedin",
    icon: linkedin,
    href: "",
  },
  {
    label: "Whatsapp",
    icon: whatsapp,
    href: "",
  },
];

export const courseData: SelectDataProps[] = [
  {
    label: "IELTS",
    value: "IELTS",
  },
  {
    label: "SPOKEN",
    value: "SPOKEN",
  },
  {
    label: "BASIC",
    value: "BASIC",
  },
  {
    label: "HSC",
    value: "HSC",
  },
  {
    label: "SSC",
    value: "SSC",
  },
];
