import { requestUrl } from "@/utils/static";

const useLogout = () => {
  const isloggedOut = async () => {
    try {
      const res = await fetch(requestUrl + "logout", {
        method: "GET",
      });

      if (res.status === 200) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { isloggedOut };
};

export default useLogout;
