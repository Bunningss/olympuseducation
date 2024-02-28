import useUserState from "./zustand/useUserState";

const useLogout = () => {
  const userState = useUserState();

  const isloggedOut = async () => {
    const res = await fetch("api/logout", {
      method: "GET",
    });

    if (res.status !== 200) {
      return;
    } else {
      userState.onLogout();
      window.location.reload();
    }
  };

  return { isloggedOut };
};

export default useLogout;
