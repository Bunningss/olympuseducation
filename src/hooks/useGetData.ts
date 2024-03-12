import { requestUrl } from "@/utils/static";
import { useEffect, useState } from "react";

export const useGetData = (url: string) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(requestUrl + url, {
          method: "GET",
        });
        setData(await res.json());
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(true);
      }
    };

    getData();
  }, [url]);

  return { data, isLoading };
};
