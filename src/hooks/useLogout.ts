import { requestUrl } from "@/utils/static";

const useLogout = () => {
  const isloggedOut = async () => {
    const res = await fetch(requestUrl + "logout", {
      method: "GET",
    });

    if (res.status !== 200) {
      return;
    } else {
      window.location.reload();
    }
  };

  return { isloggedOut };
};

export default useLogout;
