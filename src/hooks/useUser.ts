import { UserProps } from "@/utils/types";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState<UserProps>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    role: "",
  });
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") || "");
    if (data) {
      setUser(JSON.parse(data?.state?.user));
    } else {
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        role: "",
      });
    }
  }, []);

  return { user };
};

export default useUser;
