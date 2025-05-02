import { axiosInstance } from "@/api/axios";

export const fetcher = async ({
    url,
    token,
    method,
    body,
    callback,
}: {
    url: string;
    token?: any;
    method?: string;
    body?: any;
    callback?: Function;
}) => {
    return !body
        ? await axiosInstance({
              url: url,
              method: method,
          }).then((res) => res.data)
        : await axiosInstance({
              url: url,
              method: method,
              data: JSON.stringify(body),
          }).then((res) => (callback ? callback(res.data) : res.data));
};
