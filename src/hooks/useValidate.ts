import { requestUrl } from "@/utils/static";
import { useEffect, useState } from "react";

export const useValidate = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(requestUrl + "validate");
        const data = await res.json();
        if (res.status === 200) {
          if (data.user.role === "SUPER ADMIN" || "ADMIN" || "LEVEL 2") {
            setIsAdmin(true);
          }
          setUser(data.user);
          setIsValid(true);
        }
      } catch (err) {
        return err;
      }
    };

    getData();
  }, []);

  return { isAdmin, isValid, user };
};
