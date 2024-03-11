import { requestUrl } from "@/utils/static";
import { useEffect, useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(requestUrl + "batch", {
        method: "GET",
      });
      setData(await res.json());
    };

    getData();
  }, []);

  return { data };
};
