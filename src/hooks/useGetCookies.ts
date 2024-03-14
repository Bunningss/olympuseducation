import { useEffect, useState } from "react";

export const useGetCookies = () => {
  const [cookie, setCookie] = useState({
    email: "",
    admin: false,
  });
  useEffect(() => {
    const decodedCookie = decodeURIComponent(document.cookie);
    setCookie(decodedCookie && JSON.parse(decodedCookie.split("=")[1]));
  }, []);

  return { cookie };
};
