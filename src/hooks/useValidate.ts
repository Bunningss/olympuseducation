import { requestUrl } from "@/utils/static";
import { UserProps } from "@/utils/types";
import { useEffect, useState } from "react";

const useValidate = () => {
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
      const res = await fetch(requestUrl + "validate", {
        method: "GET",
      });
      const user = await res.json();

      if (user.isValid) {
        setIsValid(user.isValid);
        setUser(user.user);
      } else {
        return null;
      }
    };
    isVerified();
  }, [isValid]);

  return { isValid, user };
};

export default useValidate;
