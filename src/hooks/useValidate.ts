import { requestUrl } from "@/utils/static";
import { UserProps } from "@/utils/types";
import { useEffect, useState } from "react";

const useValidate = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    role: "",
  });

  useEffect(() => {
    const isVerified = async () => {
      try {
        const res = await fetch(requestUrl + "validate", {
          method: "GET",
        });
        const user = await res.json();

        if (user.isValid) {
          setIsValid(user.isValid);
          if (user.role === "SUPER ADMIN" || "ADMIN" || "LEVEL 2") {
            setIsAdmin(true);
          }
          setUser(user.user);
        } else {
          return null;
        }
      } catch (err) {
        console.log(err);
      }
    };
    isVerified();
  }, [isValid]);

  return { isValid, isAdmin, user };
};

export default useValidate;
