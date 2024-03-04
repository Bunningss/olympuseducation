import { requestUrl } from "@/utils/static";

const useLogout = () => {
  const isloggedOut = async () => {
    try {
      const res = await fetch(requestUrl + "auth/logout", {
        method: "GET",
      });

      if (res.status === 200) {
        // window.location.reload();
        console.log(await res.json());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { isloggedOut };
};

export default useLogout;
