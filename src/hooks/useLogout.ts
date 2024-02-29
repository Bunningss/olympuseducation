const useLogout = () => {
  const isloggedOut = async () => {
    const res = await fetch("api/logout", {
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
